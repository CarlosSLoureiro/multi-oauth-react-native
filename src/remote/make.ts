const api = `http://api-multi-oauth2-react-native-test.carlosloureiro.xyz`;

export default async (endpoint: string, data?: object) => {
  return await fetch(`${api}${endpoint}`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`
    },
    ...(data && {
      body: JSON.stringify(data)
    }),
  });
};