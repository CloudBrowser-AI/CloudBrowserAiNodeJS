import { AIOptions } from '../ai-options.js';

class ToCSVRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.headers = rq.headers;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}

export default ToCSVRequestI;