import { PRIORITIES_ORDER } from "./priorities";


export function orderBy(items, fieldList) {
    if (fieldList.includes("dueDate") && field === "dueDate") {
        orderByDate(items);
    } else if (fieldList.includes("priority") && field === "priority") {
        orderByPriority(items);
    } else if (field.List.includes("name") && field === "name") {
        orderByName(items)
    }
}

// special logic for ordering by date
function orderByDate(items) {
    items.sort((a, b) => b.getDueDate() - a.getDueDate()); // want descending order
    return items;
}

// todo: implement this
function orderByPriority(items) {
    function compareFn(a, b) {
        return PRIORITIES_ORDER(a.getPriority() - b.getPriority()); // want ascending order
    }

    items.sort(compareFn);

    return items;
}

function orderByName(items) {
    items.sort((a, b) => a.name - b.name) // just get lexicographic ordering
} 

// todo: orderBy dueDate + priority
