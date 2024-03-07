import Root from "./divider.svelte";
import type { HTMLAttributes } from "svelte/elements";

export type Props = {
	orientation: "horizontal" | "vertical"
} & HTMLAttributes<HTMLDivElement>

export {
	Root,
	Root as Divider,
};
