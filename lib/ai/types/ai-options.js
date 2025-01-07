class AIOptions {
    constructor(original = null) {
        this.openAIConfiguration = original?.openAIConfiguration ?? new OpenAIConfiguration();
    }

    fixStructuerdOutput(obj) {
        if (typeof obj === 'string' || obj == null)
            return obj;

        function processObjects(subObj) {
            if (subObj == null || (subObj.type != null && subObj.type !== "object") || (subObj.type == null && subObj.properties == null))
                return;

            if (!subObj.type) 
                subObj.type = "object";

            if (!subObj.properties) 
                subObj.properties = {};

            if (!subObj.required) 
                subObj.required = [];

            for (const key in subObj.properties) {
                if (!subObj.required.includes(key)) {
                    subObj.required.push(key);
                }

                processObjects(subObj.properties[key]);
            }

            subObj.additionalProperties = false;
        }

        processObjects(obj);
        return JSON.stringify(obj);
    }
}

class OpenAIConfiguration {
    constructor() {
        this.apiKey = null;
        this.model = null;
    }
}



export { AIOptions, OpenAIConfiguration };
