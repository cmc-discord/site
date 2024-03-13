import { json } from "@sveltejs/kit";
import { findNavigationForPath, transformNavigationList } from "$lib/data-server";

export const prerender = true;

export async function GET({ params }): Promise<Response> {
	const navigation = findNavigationForPath(params.slug);

	if (navigation !== null) {
		return json(
			transformNavigationList(navigation),
		);
	}

	return json(null);
}
