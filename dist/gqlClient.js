import axios from "axios";
import { loadConfig } from "./config.js";
class GQLClient {
    constructor(url) {
        this.url = url;
        this.client = axios.create({ baseURL: url });
    }
    setEndpoint(url) {
        this.url = url;
        return this;
    }
    setHeader(key, value) {
        const { headers } = this.client.defaults;
        if (headers) {
            headers[key] = value;
        }
        else {
            this.client.defaults.headers[key] = value;
        }
        return this;
    }
    async request(query, variables) {
        try {
            const response = await this.client.post(this.url, { query, variables });
            return response.data;
        }
        catch (error) {
            throw new Error(`GraphQL request failed: ${error}`);
        }
    }
}
const config = loadConfig();
const client = new GQLClient(config.aipUrl);
export default client;
//# sourceMappingURL=gqlClient.js.map