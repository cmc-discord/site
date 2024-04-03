// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { h } from "hastscript";

// noinspection ES6UnusedImports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PluginDoi from "@citation-js/plugin-doi";
// noinspection ES6UnusedImports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PluginIsbn from "@citation-js/plugin-isbn";
// noinspection ES6UnusedImports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PluginWikidata from "@citation-js/plugin-wikidata";
// noinspection ES6UnusedImports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PluginSoftwareFormats from "@citation-js/plugin-software-formats";
// noinspection ES6UnusedImports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PluginCSL from "@citation-js/plugin-csl";

import { Cite } from "@citation-js/core";
import { register } from "@citation-js/core/lib/plugins/output.js";

const citationRegex = /\|cite:\s*(?<id>[^\n|]+)\|/gi;
const bibliographyPattern = /\|bibliography\|/gi;

class Processor {
	/** @type { Object.<string, { index: number, cite: Cite }> } **/
	citations = {
		// key: { index: Number, cite: Cite }
	};

	async getCitation(identifier) {
		if (!(identifier in this.citations)) {
			const citation = await Cite.async(identifier, {
				output: {
					style: "citation-apa",
				},
			});

			const index = Object.keys(this.citations).length + 1;

			this.citations[identifier] = {
				cite: citation,
				index: index,
			};
		}

		return this.citations[identifier];
	}

	async processCitations(node) {
		if (node.children) {
			const children = node.children;

			for (const [index, it] of children.entries()) {
				if (it.type === "text") {
					if (it.value !== undefined) {
						const citationMatches = Array.from(it.value.matchAll(citationRegex));

						if (citationMatches.length > 0) {
							node.children[index] = await this.replaceCitations(it, citationMatches);
						}
					}
				} else {
					if (it.type === "element" && it.tagName === "pre") {
						continue;
					}

					await this.processCitations(it);
				}
			}
		}
	}

	async processBibliographies(node) {
		if (node.children) {
			const children = node.children;

			for (const [index, it] of children.entries()) {
				if (it.type === "text") {
					if (it.value !== undefined) {
						const bibliographyMatches = Array.from(it.value.matchAll(bibliographyPattern));

						if (bibliographyMatches.length > 0) {
							node.children[index] = await this.replaceBibliographies();
						}
					}
				} else {
					if (it.type === "element" && it.tagName === "pre") {
						continue;
					}

					await this.processBibliographies(it);
				}
			}
		}
	}

	async getCitationNodes(value, matches) {
		let currentValue = value;
		const nodes = [];

		let citationNode;

		for (const match of matches) {
			const str = match[0];
			const identifier = match.groups.id;

			try {
				const citation = await this.getCitation(identifier);

				citationNode = h(
					"a.footnote-link",
					{ href: `#cite-${citation.index}`, title: citation.cite.format("citation", { template: "apa" }) },
					`[${citation.index}]`,
				);
			} catch (e) {
				console.warn(
					`Failed to parse citation for identifier: ${identifier}\n  ${e.message}`,
				);
			}

			const parts = currentValue.split(str, 2);

			if (parts[0]) {
				nodes.push(h(
					"span.text", parts[0],
				));
			}

			nodes.push(citationNode);

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

	async replaceBibliographies() {
		const children = [];

		Object.values(this.citations)
			.sort((a, b) =>
				b.index - a.index
			)
			.forEach((item) => {
				children.push(
					h(
						`span.bibliography#cite-${item.index}`,
						item.cite.format("bibliography", { template: "apa" })
					)
				);
			});

		return h(
			"span.bibliographies",
			...children,
		);
	}

	async replaceCitations(node, matches) {
		return h(
			"span.citation-wrapper",
			await this.getCitationNodes(node.value, matches),
		);
	}
}

export default function rehypeIcons() {
	console.log("Register: ", register.list());

	return async (tree) => {
		const processor = new Processor();

		await processor.processCitations(tree);
		await processor.processBibliographies(tree);
	};
}
