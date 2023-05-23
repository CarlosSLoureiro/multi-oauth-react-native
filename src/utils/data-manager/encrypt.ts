import CryptoJS from "react-native-crypto-js";

export default function encryptExternalData (data: object): string {
  const jsonResponse = JSON.stringify(data);
  const encrypted = encodeURIComponent(CryptoJS.AES.encrypt(jsonResponse, `CARLOS LOUREIRO`).toString());
  return encrypted;
}