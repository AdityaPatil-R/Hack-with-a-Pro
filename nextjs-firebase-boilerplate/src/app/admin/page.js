'use client'
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BruinDash</title>
        <style>
          {`
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #1a202c;
              margin: 0;
              padding: 0;
            }

            .container {
              width: 300px;
              background-color: #2d3748;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              padding: 24px;
              text-align: center;
              position: relative;
            }

            .btn {
              display: inline-block;
              width: 120px;
              padding: 12px;
              margin: 8px;
              font-size: 16px;
              font-weight: bold;
              text-transform: uppercase;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              text-decoration: none;
              color: #ffffff;
            }

            .btn-order {
              background-color: #4299e1;
            }

            .btn-deliver {
              background-color: #f6e05e;
            }

            .btn:hover {
              opacity: 0.8;
            }

            .bg-shape1,
            .bg-shape2 {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }

            .bg-shape1 {
              left: -150px;
              height: 300px;
              width: 480px;
              background: radial-gradient(circle, #ffffff, transparent);
              border-radius: 50%;
              z-index: -1;
              filter: blur(10px);
            }

            .bg-shape2 {
              right: -100px;
              height: 180px;
              width: 240px;
              background: conic-gradient(from 180deg at 50% 50%, #87ceeb, #0141ff);
              filter: blur(10px);
              z-index: -1;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">BruinDash</h1>
          <a href="/order" className="btn btn-order">Order</a>
<<<<<<< HEAD
          <a href="/deliver" className="btn btn-deliver">Deliver</a>
=======
          <a href="/pickup" className="btn btn-pickup">Deliver</a>
>>>>>>> 5c1244a78323c85bd9dabd642b380468638aab17
          <div className="bg-shape1"></div>
          <div className="bg-shape2"></div>
        </div>
      </body>
    </html>
  );
}

export default Page;
