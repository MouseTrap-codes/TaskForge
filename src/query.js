// todo: complete query validation 
export function queryLogic(items, queryParams, queryCriteria) {
    // query will be in form {"param1":"value1"; "param2":"query2"}
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

    function query(items, queryParams, queryCriteria) {
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
                    item[queryCriterion.param] === queryCriterion.value
                )
            )

        if (relevantItems.length === 0) {
            return items; // just return everything is the query is invalid
        }

        return relevantItems;
    }

    return {
        query
    }
}

