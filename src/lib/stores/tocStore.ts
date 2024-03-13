import { type Updater, writable } from "svelte/store";

export type Heading = {
	children: Heading[],
	level: number,
	id: string,
	parent?: Heading,
	title: string,
}

const tocStore = writable<Heading[]>([]);

function clear() {
	set([]);
}

function set(value: Heading[]) {
	tocStore.set(value);
}

function update(updater: Updater<Heading[]>) {
	tocStore.update(updater);
}

export {
	tocStore,

	clear,
	set,
	update,
};
