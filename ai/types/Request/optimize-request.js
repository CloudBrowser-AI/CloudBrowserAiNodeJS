import AIOptions from './ai/types/ai-options.js';

class OptimizeRequest {
    constructor() {
        this.text = null;
        this.instruction = null;
        this.responseFormat = null;
    }
}

class OptimizeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.text = rq.text;
        this.instruction = rq.instruction;
        this.responseFormat = rq.responseFormat;
    }
}

export { OptimizeRequest, OptimizeRequestI };