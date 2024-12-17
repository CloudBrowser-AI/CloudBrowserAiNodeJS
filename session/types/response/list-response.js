class ListResponse {
    constructor() {
        this.success = false;
        this.error = null;
        this.sessions = [];
    }
}

class StoredSession {
    constructor() {
        this.label = null;
        this.createdOn = new Date();
        this.lastUpdate = new Date();
    }
}

export { ListResponse, StoredSession };