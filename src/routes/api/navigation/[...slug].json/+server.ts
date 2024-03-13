import { json } from "@sveltejs/kit";
import { findNavigationForPath } from "$lib/data-server";

export const prerender = true;
export async function GET({ params }): Promise<Response> {
	return json(
		findNavigationForPath(params.slug)
	);
}
