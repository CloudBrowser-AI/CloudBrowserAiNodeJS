import { AIOptions } from '../ai-options.js';

class ToMarkdownRequestI extends AIOptions {
    constructor(rq, options) {
        super(options);
        this.html = rq.html;
    }
}

export default ToMarkdownRequestI;