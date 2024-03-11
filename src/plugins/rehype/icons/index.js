// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { promises as fs } from "fs";

import { fromHtml } from "hast-util-from-html";

import { locate } from "@iconify/json";
import { getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";
import { h } from "hastscript";

const iconRegex = /\|(?<set>[\w-]+)\/(?<icon>[\w-]+)\|/gi;

async function processNodes(node) {
	if (node.children) {
		const children = node.children;

		for (const [index, it] of children.entries()) {
			if (it.type === "text") {
				if (it.value !== undefined) {
					const matches = Array.from(it.value.matchAll(iconRegex));

					if (matches.length > 0) {
						node.children[index] = await replaceIcons(it, matches);
					}
				}
			} else {
				if (it.type === "element" && it.tagName === "pre") {
					continue;
				}

				await processNodes(it);
			}
		}
	}
}

async function getIconNodes(value, matches) {
	let currentValue = value;
	const nodes = [];

	for (const match of matches) {
		const str = match[0];
		const setGroup = match.groups.set;
		const iconGroup = match.groups.icon;

		let icon;

		try {
			const location = locate(setGroup);
			const setData = JSON.parse(await fs.readFile(location, "utf8"));
			const iconData = getIconData(setData, iconGroup);

			if (!iconData) {
				console.debug(`Unknown icon: "${setGroup}/${iconGroup}"`);
				continue;
			}

			const svgIcon = iconToSVG(
				iconData,
				{ height: "1.1em", width: "1.1em" },
			);

			icon = iconToHTML(
				replaceIDs(svgIcon.body),
				svgIcon.attributes,
			);
		} catch (e) {
			console.debug(`Failed to import icon "${setGroup}/${iconGroup}"\n  ${e.message}`);
			continue;
		}

		const parts = currentValue.split(str, 2);

		if (parts[0]) {
			nodes.push(h(
				"span.text", parts[0],
			));
		}

		nodes.push(h(
			`span.icon.icon-${setGroup}-${iconGroup}`, fromHtml(icon, { fragment: true }),
		));

		if (currentValue.length > 1) {
			currentValue = parts[1];
		} else {
			currentValue = "";
		}
	}

	if (currentValue) {
		nodes.push(h(
			"span.text", currentValue,
		));
	}

	return nodes;
}

async function replaceIcons(node, matches) {
	return h(
		"span.icon-wrapper",
		await getIconNodes(node.value, matches),
	);
}

export default function rehypeIcons() {
	return async (tree) => {
		await processNodes(tree);
	};
}
