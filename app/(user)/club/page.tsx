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
      <Box
        clubname="컴퓨터 동아리"
        notice="다음 모임은 금요일입니다."
        onClick={() => handleclick(1)}
      />
    </div>
  );
};

export default Page;
