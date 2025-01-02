import AIOptions from './ai/types/ai-options.js';

class ToMarkdownRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
    }
}

export { ToMarkdownRequestI };