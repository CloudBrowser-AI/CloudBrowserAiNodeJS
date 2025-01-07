import { AIOptions } from '../ai-options.js';

class DescribeRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.question = rq.question;
        this.base64Image = rq.base64Image;
        this.responseFormat = this.fixStructuerdOutput(rq.responseFormat);
    }
}


export default DescribeRequestI;