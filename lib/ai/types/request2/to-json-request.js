import { AIOptions } from '../ai-options.js';

class ToJSONRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}

export default ToJSONRequestI;