import { promisify } from "util";
import { exec as syncExec } from "child_process";
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
