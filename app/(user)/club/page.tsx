"use client";

import SubTitle from "@/components/SubTitle";
import Box from "./components/Box";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const handleclick = (clubId: number) => {
    router.push(`/club/${clubId}`);
    console.log("클릭됨");
  };
  return (
    <div>
      <SubTitle name="내 동아리" />
      <div className="flex flex-col gap-4">
        <Box
          clubname="해무리"
          notice={`동방 비번: ****
다음주 정기모임`}
          operator="운영진"
          onClick={() => handleclick(1)}
        />
        <Box
          clubname="UMC"
          notice={`스프링 스터디 
            매주 화요일 6시`}
          operator="일반회원"
          onClick={() => handleclick(1)}
        />
      </div>
    </div>
  );
};

export default Page;
