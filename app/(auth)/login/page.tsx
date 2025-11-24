"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLogin = () => {
    // 여기에 구글 로그인 로직 추가
    console.log("Google 로그인 시도");
    router.push("/");
  };
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 px-4">
      <div className="w-full max-w-[380px] bg-white rounded-2xl border border-gray-300 shadow-lg p-8">
        <div className="flex flex-col items-center">
          <div className="font-bold text-2xl mb-4">동글동글 로그인 페이지</div>

          <button
            type="button"
            onClick={handleLogin}
            aria-label="Sign in with Google"
            className="flex items-center justify-center gap-3 w-full rounded-xl px-4 py-3 border border-gray-300 hover:shadow transition active:scale-95"
          >
            <Image src="/google.png" alt="구글 로고" width={20} height={20} />
            <span className="font-medium">Sign in with Google</span>
          </button>

          <div className="mt-4 w-full flex items-center justify-end">
            <Link
              href="/login/admin"
              className="text-sm text-gray-600 hover:text-gray-800 px-2 py-1 rounded-md"
            >
              운영진이신가요?
            </Link>
          </div>

          <div className="mt-6 w-full text-center text-xs text-gray-400 whitespace-pre-line">
            계속 진행하면 서비스 이용약관과 개인정보처리방침에
            {"\n"}
            동의하는 것으로 간주됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
