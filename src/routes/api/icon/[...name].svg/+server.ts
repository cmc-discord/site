import { getIcon } from "$lib/utils-server";
import { error } from "@sveltejs/kit";

export const prerender = true;

export async function GET({ params }): Promise<Response> {
	const [iconSet, iconName] = params.name.split("/", 2);

	const icon = await getIcon(
		iconSet,
		iconName,
		{
			height: "1.5rem",
			width: "1.5rem",
		},
	);

	if (icon == null) {
		error(404, "Icon not found.");
	}

	return new Response(icon);
}
