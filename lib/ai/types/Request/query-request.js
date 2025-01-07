import { AIOptions } from '../ai-options.js';

class QueryRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.prompt = rq.prompt;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}

export default QueryRequestI;