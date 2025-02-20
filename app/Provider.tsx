"use client";
import React, { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={"6LctNd0qAAAAABAwD2tgn95xq0mbxGgB-YvNf205"}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default Provider;
