"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};

const AdminPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      // TODO: 실제 인증 로직 연결
      console.log("admin login", data);
      // simulate
      await new Promise((r) => setTimeout(r, 700));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-center text-xl font-semibold mb-6">
          동글동글 운영진 로그인
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              type="email"
              className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "유효한 이메일을 입력하세요",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: { value: 6, message: "6자 이상 입력하세요" },
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              일반 로그인으로 돌아가기
            </Link>
            <button
              type="submit"
              className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? "로그인 중..." : "로그인"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminPage;
