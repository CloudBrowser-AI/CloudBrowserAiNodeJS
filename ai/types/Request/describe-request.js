import AIOptions from './ai/types/ai-options.js';

class DescribeRequest {
    constructor() {
        this.question = null;
        this.base64Image = null;
        this.responseFormat = null;
    }
}

class DescribeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.question = rq.question;
        this.base64Image = rq.base64Image;
        this.responseFormat = rq.responseFormat;
    }
}

export { DescribeRequest, DescribeRequestI };