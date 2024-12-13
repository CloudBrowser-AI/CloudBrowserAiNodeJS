class AIOptions {
    constructor() {
        this.openAIConfiguration = new OpenAIConfiguration();
    }

    copyFrom(original) {
        this.openAIConfiguration = original.openAIConfiguration;
    }
}

class OpenAIConfiguration {
    constructor() {
        this.apiKey = null;
        this.model = null;
    }
}

module.exports = { AIOptions, OpenAIConfiguration };
