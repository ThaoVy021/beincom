"use client";

import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { verifyToken } from "@/redux/slices/auth/thunks";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }: any) => {
  const dispatch = useDispatch<any>();
  const auth = useSelector((state: any) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(verifyToken());
    } else {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    if (auth?.authenticate?.id) {
      if (pathname === "/login") router.push("/newsfeed");
    }
  }, [auth?.authenticate]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
