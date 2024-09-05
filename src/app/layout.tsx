"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import AuthContextProvider from "@/contexts/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <html lang="en">
          <title>Beincom by Vy</title>
          <meta name="description" content="Made by Vy" />
          <body className="bg-slate-200">{children}</body>
        </html>
      </AuthContextProvider>
    </Provider>
  );
}
