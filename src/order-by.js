import { PRIORITIES_ORDER } from "./priorities";


export function orderBy(items, field, fieldList) {
    const list = [...items];
    if (fieldList.includes("dueDate") && field === "dueDate") {
         return orderByDate(list);
    } else if (fieldList.includes("priority") && field === "priority") {
        return orderByPriority(list);
    } else if (fieldList.includes("title") && field === "title") {
        return orderByTitle(list);
    } else if (fieldList.includes("priority") && fieldList.includes("dueDate")
                && field === "dueDate and priority") {
        return orderByDueDateAndPriority(list);
    } else if (fieldList.includes("name") && fieldList.includes("name")) {
        return orderByProjectName(list);
    } else {
        return list;
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
        return PRIORITIES_ORDER[a.getPriority()] - PRIORITIES_ORDER[b.getPriority()]; // want ascending order
    }

    items.sort(compareFn);

    return items;
}

function orderByTitle(items) {
    return items.sort((a, b) => a.getTitle().localeCompare(b.getTitle())); // just get lexicographic ordering
} 

function orderByDueDateAndPriority(items) {
    return items.sort((a, b) => {
    const prioDiff =
      PRIORITIES_ORDER[a.getPriority()] - PRIORITIES_ORDER[b.getPriority()];
    if (prioDiff !== 0) return prioDiff; // lower numeric value = higher priority
    return b.getDueDate() - a.getDueDate(); // same priority → newer due date first
  });
}

function orderByProjectName(items) {
    return items.sort((a, b) => a.getName().localeCompare(b.getName()));
}
