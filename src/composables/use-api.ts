import fetchApi from '@/api/fetch-api';

const sendRequest = fetchApi();

export default function useApi() {
  async function check(url: URL): Promise<Response> {
    const options = {
      method: 'HEAD',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const request = new Request(url.toString(), options);
    const response = await sendRequest(request);
    return response;
  }

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

  return { check, get };
}
