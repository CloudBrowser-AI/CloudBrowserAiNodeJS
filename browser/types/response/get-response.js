class GetResponse {
    constructor() {
        this.error = null;
        this.sessions = [];
    }
}

class Session {
    constructor() {
        this.startedOn = null;
        this.label = null;
        this.address = null;
        this.vncPass = null;
    }
}

export { GetResponse, Session };
