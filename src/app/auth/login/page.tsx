"use client";

import React, { useState, ChangeEvent } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  AnimatedText,
  FadeInElement,
} from "@/components/animated/animatedElements";

interface AuthInputProps {
  type?: string;
  placeholder?: string;
  icon: React.ElementType;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
  error?: boolean;
}

interface FormErrors {
  email?: boolean;
  password?: boolean;
  [key: string]: boolean | undefined;
}

// Input Component
const AuthInput = ({
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  showPasswordToggle = false,
  error = false,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon
          className={`w-5 h-5 transition-colors ${
            error
              ? "text-red-500"
              : "text-gray-400 group-focus-within:text-black"
          }`}
        />
      </div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-12 pr-12 py-4 bg-white border-2 transition-all duration-300 rounded-xl font-semibold placeholder-gray-500 focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-600 bg-red-50"
            : "border-gray-200 focus:border-black hover:border-gray-300"
        }`}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-4 flex items-center"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
          ) : (
            <Eye className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
          )}
        </button>
      )}
    </div>
  );
};

// Main Auth Component
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    company: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(` submitted successfully!`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">
      {/* Main Container */}
      <div className="relative mx-auto my-10 flex max-w-2xl flex-col items-center justify-center min-h-[90vh]">
        {/* Border Effects */}
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-black to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-black to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-black to-transparent" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px w-full bg-neutral-200">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-black to-transparent" />
        </div>

        {/* Auth Content */}
        <div
          className="px-4 py-10 md:py-20 w-full relative"
          style={{
            background: `linear-gradient(to bottom, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 50%, rgba(245,245,245,0) 100%)`,
          }}
        >
          <FadeInElement className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
                <AnimatedText text="Welcome Back" />
              </h1>
              <FadeInElement delay={600}>
                <p className="text-lg text-gray-600 font-semibold">
                  Sign in to your Field Service AI account
                </p>
              </FadeInElement>
            </div>

            <FadeInElement delay={800}>
              <div className="space-y-6">
                <AuthInput
                  type="email"
                  placeholder="Enter your email"
                  icon={Mail}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  error={errors.email}
                />

                <AuthInput
                  type="password"
                  placeholder="Enter your password"
                  icon={Lock}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  showPasswordToggle
                  error={errors.password}
                />

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-black border-2 border-gray-300 rounded focus:ring-black"
                    />
                    <span className="text-sm font-semibold text-gray-600">
                      Remember me
                    </span>
                  </label>
                  <Link
                    type="button"
                    href={"/auth/forgot-password"}
                    className="text-sm font-bold text-black hover:text-gray-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-black text-white py-4 rounded-xl font-black text-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </FadeInElement>

            <FadeInElement delay={1000}>
              <div className="mt-8 text-center">
                <p className="text-gray-600 font-semibold">
                  Don&apos;t have an account?{" "}
                  <Link
                    href={"/auth/signup"}
                    className="font-black text-black hover:text-gray-700 transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </FadeInElement>
          </FadeInElement>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
