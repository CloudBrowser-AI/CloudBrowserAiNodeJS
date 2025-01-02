import AIOptions from './ai/types/ai-options.js';

class ToCSVRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.headers = rq.headers;
        this.responseFormat = rq.responseFormat;
    }
}

export { ToCSVRequestI };