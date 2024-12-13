class BrowserOptions {
    constructor() {
        this.args = [];
        this.ignoredDefaultArgs = [];
        this.headless = null;
        this.extensions = [];
        this.stealth = null;
        this.browser = null;
        this.proxy = null;
        this.keepOpen = null;
        this.label = null;
        this.saveSession = false;
        this.recoverSession = false;
    }
}

module.exports = BrowserOptions;
