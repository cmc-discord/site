import { exec as syncExec } from "child_process";
import { promises as fs } from "fs";
import { promisify } from "util";

import { locate } from "@iconify/json";
import { getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";
import type { IconifyIconCustomisations } from "@iconify/utils/lib/customisations/defaults";

import { trimString } from "$lib/utils";

export const exec = promisify(syncExec);

export async function getGitTimes(filePath: string): Promise<{ createdDate?: Date, modifiedDate?: Date }> {
	const path = (await exec("git rev-parse --show-toplevel")).stdout;

	const times = (
		await exec(
			`git log --all --pretty="format:%cI" -- "${path}/${trimString(filePath, "/")}"`
				.replace("\n", ""),
		)
	).stdout
		.trim()
		.split("\n")
		.map(
			(time) => new Date(time),
		);

	if (times.length == 0) {
		return {};
	} else if (times.length == 1) {
		return {
			createdDate: times[0],
			modifiedDate: times[0],
		};
	} else {
		return {
			createdDate: times[times.length - 1],
			modifiedDate: times[0],
		};
	}
}

export async function getIcon(
	setName: string,
	iconName: string,
	customizations?: IconifyIconCustomisations
): Promise<string | null> {
	try {
		const location = locate(setName);
		const setData = JSON.parse(await fs.readFile(location, "utf8"));
		const iconData = getIconData(setData, iconName);

		if (!iconData) {
			return null;
		}

		const svgIcon = iconToSVG(
			iconData,
			customizations
		);

		return iconToHTML(
			replaceIDs(svgIcon.body),
			svgIcon.attributes,
		);
	} catch (e) {
		return null;
	}
}
