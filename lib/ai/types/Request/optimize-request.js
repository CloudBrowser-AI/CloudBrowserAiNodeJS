import { AIOptions } from '../ai-options.js';

class OptimizeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.text = rq.text;
        this.instruction = rq.instruction;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}

export default OptimizeRequestI;