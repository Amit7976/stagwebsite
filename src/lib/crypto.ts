import CryptoJS from "crypto-js";

const SECRET = "YOUR_SECRET_KEY_1234"; // Replace this with a long random key

// Generic encrypt function — supports any serializable type safely
export const encrypt = <T>(data: T): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString();
};

// Generic decrypt function — returns typed data or null
export const decrypt = <T>(cipher: string): T | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipher, SECRET);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) return null;

    return JSON.parse(decrypted) as T;
  } catch {
    return null;
  }
};
