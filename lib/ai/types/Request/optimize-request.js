import AIOptions from './ai/types/ai-options.js';

class OptimizeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.text = rq.text;
        this.instruction = rq.instruction;
        this.responseFormat = rq.responseFormat;
    }
}

export { OptimizeRequestI };