export default class ApiClient<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetch<U>(
    url: string,
    method: string,
    data?: T,
    headers?: { [key: string]: string }
  ): Promise<U> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },

      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return (await response.json()) as U;
  }

  // CRUD methods with basic type annotations
  async get<U>(url: string, headers?: { [key: string]: string }): Promise<U> {
    console.log(headers);
    return this.fetch<U>(url, "GET", undefined, headers);
  }

  async post<U>(
    url: string,
    data: T,
    headers?: { [key: string]: string }
  ): Promise<U> {
    return this.fetch<U>(url, "POST", data, headers);
  }

  async put<U>(
    url: string,
    data: T,
    headers?: { [key: string]: string }
  ): Promise<U> {
    return this.fetch<U>(url, "PUT", data, headers);
  }

  async delete(
    url: string,
    headers?: { [key: string]: string }
  ): Promise<void> {
    return this.fetch<void>(url, "DELETE", undefined, headers);
  }
}
// export default new ApiClient(Env.SERVER_URL as string);
