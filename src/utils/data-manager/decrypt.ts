import CryptoJS from "react-native-crypto-js";
import QueryString from 'query-string';

export default function decryptExternalData (value: string): object | undefined {
    const searchParams = QueryString.parse(value);
    const data = searchParams.data ? String(searchParams.data) : null;
    
    let dataDecrypted;

    if (data) {
      const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(data), 'CARLOS LOUREIRO').toString(CryptoJS.enc.Utf8);
      try {
        dataDecrypted = JSON.parse(decrypted);
      } catch (e) {
      }
    }

    return dataDecrypted;
}