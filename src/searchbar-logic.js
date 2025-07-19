export function searchBarLogic(items, searchContent) {
    items.filter((item) => item.includes(searchContent));
    return items;
}