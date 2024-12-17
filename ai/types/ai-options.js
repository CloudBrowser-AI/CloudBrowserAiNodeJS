class AIOptions {
    constructor(original = null) {
        this.openAIConfiguration = original?.openAIConfiguration ?? new OpenAIConfiguration();
    }
}

class OpenAIConfiguration {
    constructor() {
        this.apiKey = null;
        this.model = null;
    }
}

export { AIOptions, OpenAIConfiguration };
