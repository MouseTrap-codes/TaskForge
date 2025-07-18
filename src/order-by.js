import { PRIORITIES } from "./priorities";

export function orderBy(items, fieldList) {
    if (fieldList.includes("dueDate") && field === "dueDate") {
        orderByDate(items);
    } else if (fieldList.includes("priority") && field === "priority") {
        orderByPriority(items);
    }
}

// special logic for ordering by date
function orderByDate(items) {
    items.sort((a, b) => a.dueDate - b.dueDate);
    return items;
}

// todo: implement this
function orderByPriority(items, field) {
    return items;
}

function orderByName(items) {
    items.sort((a, b) => a.name - b.name)
}
