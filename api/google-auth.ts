// import type { VercelRequest, VercelResponse } from "@vercel/node";

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   // تنظیم CORS برای درخواست‌های Cross-Origin
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,OPTIONS,PATCH,DELETE,POST,PUT"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
//   );

//   // پاسخ به درخواست‌های OPTIONS (Preflight)
//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//     return;
//   }

//   // فقط درخواست‌های POST رو قبول کن
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { idToken } = req.body;

//     if (!idToken) {
//       return res.status(400).json({ error: "ID token is required" });
//     }

//     // ارسال درخواست به سرور بک‌اند خودتون
//     const backendUrl = process.env.BACKEND_URL || "http://localhost:8080";

//     const response = await fetch(`${backendUrl}/api/auth/google`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ id_token: idToken }),
//     });

//     const data = await response.json();

//     return res.status(response.status).json(data);
//   } catch (error) {
//     console.error("Proxy error:", error);
//     return res.status(500).json({
//       error: "Internal server error",
//       message: error instanceof Error ? error.message : "Unknown error",
//     });
//   }
// }
// //

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "GET") {
    return res.status(200).json({ message: "Proxy is working" });
  }

  // بقیه کد شما بدون تغییر
}
