const api = `http://api-multi-oauth2-react-native-test.carlosloureiro.xyz`;

export default async (method: string, endpoint: string, authToken?:string, data?: object) => {
  const headers: { [key: string]: string } = {
    'Content-Type': `application/json`
  };

  if (authToken) {
    headers[`Authorization`] = `Bearer ${authToken}`;
  }

  return await fetch(`${api}${endpoint}`, {
    method,
    headers,
    ...(data && {
      body: JSON.stringify(data)
    }),
  });
};