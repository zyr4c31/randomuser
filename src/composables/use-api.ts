import fetchApi from '@/api/fetch-api';

const sendRequest = fetchApi();

export default function useApi() {
  async function get(url: URL): Promise<Response> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const request = new Request(url.toString(), options);
    const response = await sendRequest(request);
    return response;
  }
  return { get };
}
