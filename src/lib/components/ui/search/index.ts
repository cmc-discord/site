import Bar from "./search.svelte";

import { writable } from "svelte/store";

type SearchResult = { url: string, title: string, description: string }
type SearchResults = Array<SearchResult>

export const resultStore = writable<SearchResults>([]);
export const searchStore = writable<string>("")

export function clearResults() {
	resultStore.set([]);
}

export function addResult(result: SearchResult) {
	resultStore.update(items => {
		items.push(result);

		return items;
	});
}



export default {
	Bar,
};
