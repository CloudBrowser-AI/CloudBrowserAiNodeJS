const AIError = {
    UNKNOWN: 0,
    CONTENT_FLAGGED: 1,
    TOO_LONG: 2,
    INVALID_API_KEY: 3
};

class AIResponse {
    constructor() {
        this.status = null;
        this.response = null;
        this.openAiError = null;
    }
}

export { AIError, AIResponse };