import { AIOptions } from '../ai-options.js';

class SummarizeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
        this.isoLang = rq.isoLang;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}

export default SummarizeRequestI;