import { json } from "@sveltejs/kit";
import { getNavigationRoot } from "$lib/data";

export const prerender = true;
export async function GET(): Promise<Response> {
	return json(
		getNavigationRoot()
	);
}
