const AIOptions = require('./ai/types/ai-options');

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

module.exports = { ToMarkdownRequest };
