const fetch = require('node-fetch');

class ClientBase {
    constructor(baseAddress) {
        this._baseAddress = baseAddress;
    }

    get baseAddress() {
        return this._baseAddress;
    }

    set baseAddress(value) {
        this._baseAddress = value;
    }

    async post(apiKey, name, rq, timeout = null, ct = null) {
        const url = `${this.baseAddress}${name}`;
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rq),
            signal: ct
        };

        if (timeout) {
            options.timeout = timeout;
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    async get(apiKey, name, timeout = null, ct = null) {
        const url = `${this.baseAddress}${name}`;
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
            signal: ct
        };

        if (timeout) {
            options.timeout = timeout;
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
}
