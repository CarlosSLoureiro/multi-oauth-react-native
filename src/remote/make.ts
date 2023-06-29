import { API_DOMAIN } from '@env';

export default async (method: string, endpoint: string, authToken?:string, data?: object) => {
  const headers: { [key: string]: string } = {
    'Content-Type': `application/json`
  };

  if (authToken) {
    headers[`Authorization`] = `Bearer ${authToken}`;
  }

  return await fetch(`${API_DOMAIN}${endpoint}`, {
    method,
    headers,
    ...(data && {
      body: JSON.stringify(data)
    }),
  });
};