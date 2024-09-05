"use client";

import React from "react";
import Image from "next/image";
import "./index.scss";

export default function Logo() {
  return (
    <div className="logo flex justify-center items-center gap-1">
      <img src="/logo_beincomm.webp" alt="Bic" className="h-6 mr-1" />
      <img src="/logo_beincomm_text.webp" alt="Bic" className="h-5" />
    </div>
  );
}
