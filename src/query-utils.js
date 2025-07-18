 export function query(items, queryParams, queryCriteria) {
    queryCriteria = cleanAndValidateQuery(queryCriteria, queryParams);
    if (queryCriteria === "") {
        return items;
    }

    if (queryParams.length !== queryCriteria.length) {
        return items
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let relevantItems = items.filter((item) => 
            queryCriteria.every((queryCriterion) => {
                const getterName = "get" + capitalize(queryCriterion.param);
                if (typeof item[getterName] !== "function") {
                    return false;
                }
                // now works with getterss
                return queryParams.includes(queryCriterion.param) && item[getterName]() === queryCriterion.value;
            }
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



