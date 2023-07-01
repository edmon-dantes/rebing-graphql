declare class GQLClient {
    private client;
    private url;
    constructor(url: string);
    setEndpoint(url: string): GQLClient;
    setHeader(key: string, value: string): GQLClient;
    request<T>(query: string, variables: any): Promise<T>;
}
declare const client: GQLClient;
export default client;
