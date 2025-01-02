import AIOptions from './ai/types/ai-options.js';

class ToJSONRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.responseFormat = rq.responseFormat;
    }
}

export { ToJSONRequestI };