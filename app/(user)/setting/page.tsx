const Page = () => {
  return (
    <div className="flex flex-col justify-center gap-8 py-4">
      {/* 카드 전체 */}
      <div className="bg-white rounded-3xl shadow-md border p-6 text-[#5C4B1B]">
        <h2 className="text-xl font-bold mb-4">내 정보</h2>

        {/* 정보 영역 */}
        <div className="space-y-4">
          <div className="flex justify-between text-lg">
            <span className="font-semibold text-[#898066]">이름</span>
            <span className="font-medium text-black">홍길동</span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="font-semibold text-[#898066]">이메일</span>
            <span className="font-medium text-black">
              gilidong123@hufs.ac.kr
            </span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="font-semibold text-[#898066]">학번</span>
            <span className="font-medium text-black">20210000</span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="font-semibold text-[#898066]">학과</span>
            <span className="font-medium text-black">컴퓨터공학부</span>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex justify-between mt-6">
          <button className="text-red-500 font-semibold">로그아웃</button>
          <button className="text-[#5C4B1B] font-medium">회원탈퇴</button>
        </div>
      </div>

      {/* 푸시 알림 */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <span className="text-[#5C4B1B] font-semibold">푸시 알림 허용</span>

          {/* 토글 */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div
              className="w-11 h-6 bg-gray-300 peer-focus:outline-none 
              rounded-full peer 
              peer-checked:bg-[#5C4B1B] transition-all"
            ></div>
            <div
              className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full 
              peer-checked:translate-x-full transition-all"
            ></div>
          </label>
        </div>
        {/* 운영진 신청 버튼 */}
        <button
          className="w-full bg-[#6C8CFF] text-white font-semibold 
        py-3 rounded-xl mt-6 shadow-md active:scale-95 transition"
        >
          운영진 승급 신청
        </button>
      </div>
    </div>
  );
};

export default Page;
