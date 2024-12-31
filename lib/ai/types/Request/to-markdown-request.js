import AIOptions from './ai/types/ai-options.js';

class ToMarkdownRequest {
    constructor() {
        this.html = null;
    }
}

class ToMarkdownRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
    }
}

export { ToMarkdownRequest, ToMarkdownRequestI };