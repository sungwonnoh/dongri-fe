"use client";

import { useState } from "react";

import { BsPlusSquare } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import TabMenu from "../components/Tabmenu";

export default function ClubDetailPage() {
  const [activeTab, setActiveTab] = useState("정기공연");
  const isOperator = true; //true가 운영진
  const tabs = ["정기공연 리허설", "정기공연", "버스킹"];
  const scheduleDummy = {
    "정기공연 리허설": `📌 장소: 학생회관 301호
    ⏱ 시간: 매주 수요일 오후 7시
    📝 준비물: 개인 악기 및 담당 파트 연습 필수`,
    정기공연: `📌 장소: 노천극장
    ⏱ 날짜: 3월 12일 오후 6시
    📝 의상: 블랙/화이트 톤`,
    버스킹: `📌 장소: 학생회관 앞 잔디광장
    ⏱ 날짜: 주말 오후 진행
    📝 음향장비는 동방에서 대여 가능`,
  };
  return (
    <div>
      {/* Header */}
      <PageHeader
        title="해무리"
        rightButtonLabel={isOperator ? "회원관리" : undefined}
        onRightButtonClick={
          isOperator ? () => console.log("회원관리 클릭") : undefined
        }
      />

      {/* 공지사항 */}
      <SectionHeader
        title="공지사항"
        rightIcon={isOperator ? <BsPlusSquare size={22} /> : null}
      />
      <Card>
        동아리방 비밀번호 ****** <br />
        동아리 활동 중 동방 사용 규칙 반드시 준수
      </Card>

      <div className="h-6" />

      {/* 일정 */}
      <SectionHeader title="일정" />

      <TabMenu tabs={tabs} active={activeTab} onChange={setActiveTab} />

      <div className="h-3" />

      <Card>
        <div className="whitespace-pre-line text-sm text-[#5C4B1B] leading-relaxed">
          {scheduleDummy[activeTab]}
        </div>
      </Card>

      <div className="h-6" />

      {/* 설문/투표 */}
      <SectionHeader title="투표 / 설문" />

      <Card>
        <div className="mb-3 text-[#5C4B1B] text-sm font-semibold">
          정기공연 뒷풀이 참여 조사
        </div>
        <div className="flex flex-col gap-3">
          <ProgressBar percent={65} label="참여 17명" />
          <ProgressBar percent={20} label="불참 3명" />
        </div>
        <button className="mt-4 w-full bg-[#6B92FF] text-white py-2 rounded-xl text-sm font-semibold shadow active:scale-95">
          의견 남기기
        </button>
      </Card>
    </div>
  );
}
