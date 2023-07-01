import axios, { AxiosInstance } from "axios";
import { loadConfig } from "./config.js";

class GQLClient {
    private client!: AxiosInstance;
    private url!: string;

    constructor(url: string) {
        this.url = url;
        this.client = axios.create({ baseURL: url });
    }

    setEndpoint(url: string): GQLClient {
        this.url = url;
        return this;
    }

    setHeader(key: string, value: string): GQLClient {
        const { headers } = this.client.defaults;

        if (headers) {
            headers[key] = value;
        } else {
            this.client.defaults.headers[key] = value;
        }

        return this;
    }

    async request<T>(query: string, variables: any): Promise<T> {
        try {
            const response = await this.client.post(this.url, { query, variables });
            return response.data;
        } catch (error) {
            throw new Error(`GraphQL request failed: ${error}`);
        }
    }
}

const config = loadConfig();

const client = new GQLClient(config.aipUrl);

export default client;