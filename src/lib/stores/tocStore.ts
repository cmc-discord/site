import { type Updater, writable } from "svelte/store";

export type Heading = {
	children: Heading[],
	level: number,
	id: string,
	parent?: Heading,
	title: string,
}

const store = writable<Heading[]>([])

function clear() {
	set([])
}

function set(value: Heading[]) {
	store.set(value)
}

function update(updater: Updater<Heading[]>) {
	store.update(updater)
}

export {
	store,

	clear,
	set,
	update,
}
