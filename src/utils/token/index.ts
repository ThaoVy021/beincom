export function generateToken({ email }: any) {
  const expiredDate = Date.now() + 86400000; // expired in 24h * 60m * 60s * 1000ms
  const payload = JSON.stringify({ email: email.toLowerCase() });

  const token = `fake-token|${payload}|${expiredDate}`;
  return token;
}

export async function verifyToken(token: string) {
  try {
    const [_, payloadStringified, expiredTime] = token.split("|");
    const payload = JSON.parse(payloadStringified);

    // Validate expiredTime
    if (Date.now() > parseInt(expiredTime)) return false;

    // Validate user data
    if (!payload?.email) return false;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    const userInfor = data.find(
      (e: any) => e.email.toLowerCase() === payload?.email.toLowerCase()
    );
    if (userInfor) return userInfor;

    return false;
  } catch (err) {
    console.log("Unexpected error:", err);
    return false;
  }
}
