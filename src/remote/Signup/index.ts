import { RequestSignupData, ResponseSignupData } from "./types";

export default async function SignupRequest(data: RequestSignupData): Promise<ResponseSignupData> {
  const response = await fetch(`http://api-multi-oauth2-react-native-test.carlosloureiro.xyz/user/create`, {
    method: `POST`,
    headers: {
      'Content-Type': `application/json`
    },
    body: JSON.stringify(data)
  });

  return await response.json();
}

