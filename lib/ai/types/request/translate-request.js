import { AIOptions } from '../ai-options.js';

class TranslateRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.text = rq.text;
        this.isoLang = rq.isoLang;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}

export default TranslateRequestI;