import CategoryIcons from "@/components/main/CategoryIcon";
import HotClubList from "@/components/main/HotClub";
import RecommendedClubCard from "@/components/main/RecommendClub";
import SearchBtn from "@/components/SearchBtn";
import SubTitle from "@/components/SubTitle";

const Page = () => {
  return (
    <div className="flex flex-col gap-2">
      <SearchBtn />
      <CategoryIcons />
      <div>
        <SubTitle name="인기 급상승 동아리" />
        <HotClubList />
      </div>

      <div>
        <div className="flex justify-between items-center mt-6">
          <SubTitle name="추천 동아리" />
          <span className="text-[#5C4B1B] text-md">{">"}</span>
        </div>
        <RecommendedClubCard />
      </div>
    </div>
  );
};

export default Page;
