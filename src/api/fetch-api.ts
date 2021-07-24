export default function fetchApi(): Promise<Response> | any {
  async function sendRequest(request: Request): Promise<Response> {
    const response: Response = await fetch(request);
    return response;
  }
  return sendRequest;
}
