import fetchApi from '@/api/fetch-api';
import { Randomuser } from '@/interface/randomuser';

const sendRequest = fetchApi();

export default function useApi(): any {
  async function call(url: URL): Promise<Response | Randomuser> {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const request = new Request(url.toString(), options);
    try {
      const response = await sendRequest(request);
      const data: Randomuser = await response.json();
      if (data.error) {
        const { error } = data;
        const errormsg = `error ${response.status}: ${error}`;
        throw errormsg;
      }
      return data;
    } catch (errormsg) {
      return errormsg;
    }
  }
  return { call };
}
