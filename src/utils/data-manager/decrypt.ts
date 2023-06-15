import CryptoJS from "react-native-crypto-js";

export default function decryptExternalData (value: string): object | undefined {
  const decrypted = CryptoJS.AES.decrypt(decodeURIComponent(value), `CARLOS LOUREIRO`).toString(CryptoJS.enc.Utf8);
  const dataDecrypted = JSON.parse(decrypted);
  return dataDecrypted;
}