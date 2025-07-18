 export function query(items, queryParams, queryCriteria) {
    queryCriteria = cleanAndValidateQuery(queryCriteria, queryParams);
    if (queryCriteria === "") {
        return items;
    }

    if (queryParams.length !== queryCriteria.length) {
        return items
    }

    let relevantItems = items.filter((item) => 
            queryCriteria.every((queryCriterion) => 
                queryParams.includes(queryCriterion.param)
                &&
                // need to change this logic to work with getter methods -> can't directly access stuff like this
                item[queryCriterion.param] === queryCriterion.value
            )
        )

    if (relevantItems.length === 0) {
        return items; // just return everything is the query is invalid
    }

    return relevantItems;
}

function cleanAndValidateQuery(queryCriteria, queryParams) {
    try {
        const parsed = JSON.parse(queryCriteria);
        if (!Array.isArray(parsed)) {
            return "";
        }
        if (!parsed.every(queryCriterion => queryCriterion && typeof queryCriterion.param === "string" && queryParams.includes(queryCriterion.param))) {
            return ""
        }
        return parsed
    } catch (e) {
        return "";
    }
}



