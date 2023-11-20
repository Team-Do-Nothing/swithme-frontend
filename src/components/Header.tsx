import Link from "next/link";

const Header = () => {
  return (
    <div className="z-50 flex justify-center items-center w-full h-20 overflow-hidden bg-white">
      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-full max-w-7xl overflow-hidden">
        <div className="w-fit flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-5 bg-primary-100 text-4xl text-white">
          Study With Me
        </div>
        <div className="w-full flex justify-start items-center self-stretch flex-grow overflow-hidden">
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-10 text-2xl font-medium text-text-100">
            <Link href="/mygroup">내 스터디</Link>
          </div>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-10 text-2xl font-medium text-text-100">
            <Link href="/groups">스터디 검색</Link>
          </div>
        </div>
        <div className="w-fit flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5">
          <Link
            href={"/signin"}
            className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded-xl bg-text-300 border border-text-200 text-2xl font-medium cursor-pointer"
          >
            로그인
          </Link>
          <Link
            href={"/signup"}
            className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 rounded-xl bg-text-300 border border-text-200 text-2xl font-medium cursor-pointer"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
