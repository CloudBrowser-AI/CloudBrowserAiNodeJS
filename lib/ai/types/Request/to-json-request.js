import AIOptions from './ai/types/ai-options.js';

class ToJSONRequest {
    constructor() {
        this.html = null;
        this.responseFormat = null;
    }
}

class ToJSONRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.responseFormat = rq.responseFormat;
    }
}

export { ToJSONRequest, ToJSONRequestI };