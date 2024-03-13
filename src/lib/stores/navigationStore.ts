import { type Updater, writable } from "svelte/store";
import type { RichNavigationListWithPrefix } from "$lib/data";

const navigationStore = writable<RichNavigationListWithPrefix | null>(null);

function clear() {
	set(null);
}

function set(value: RichNavigationListWithPrefix | null) {
	console.log("Navigation store: setting value:", value)
	navigationStore.set(value);
}

function update(updater: Updater<RichNavigationListWithPrefix | null>) {
	navigationStore.update(updater);
}

export {
	navigationStore,

	clear,
	set,
	update,
};
