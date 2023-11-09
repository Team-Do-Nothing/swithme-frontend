'use client';

import React, {useState} from 'react'
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";

const WritePage = () => {
    const [fileName, setFileName] = useState<string>('업로드할 파일을 선택해주세요');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name); // 선택된 파일의 이름으로 상태를 업데이트합니다.
        }
    };

    return (
        <>
            <MyGroupHeader/>
            <div className="flex flex-col items-center gap-[10px] px-0 py-[10px] relative">
                <div className="items-start gap-[20px] px-[10px] py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex-col w-[120px] items-center justify-center gap-[10px] p-[10px] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            게시글 종류
                        </div>
                    </div>
                    <div className="items-center gap-[10px] p-[10px] flex-1 self-stretch grow rounded-[12px] overflow-hidden border-2 border-solid border-[#d9d9d9] flex relative">
                        <select className="relative w-fit mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            <option value="notices">공지사항</option>
                            <option value="board">게시판</option>
                        </select>
                    </div>
                </div>
                <div className="items-start gap-[20px] px-[10px] py-0 self-stretch w-full flex-[0_0_auto] flex relative">
                    <div className="flex-col w-[120px] items-center justify-center gap-[10px] p-[10px] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            제목
                        </div>
                    </div>
                    <div className="items-center flex-1 self-stretch grow rounded-[12px] overflow-hidden border-2 border-solid border-[#d9d9d9] flex relative">
                        <input type="text" placeholder="제목을 입력해주세요." className="w-full h-full p-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[20px] tracking-[0] leading-[24px] whitespace-nowrap outline-none"/>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[20px] px-[10px] py-0 w-full flex-[0_0_auto] relative self-stretch">
                    <div className="flex-col w-[120px] items-center justify-center gap-[10px] p-[10px] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            파일
                        </div>
                    </div>
                    <div className="items-center gap-[10px] p-[10px] flex-1 self-stretch grow rounded-[12px] overflow-hidden border-2 border-solid border-[#d9d9d9] flex relative">
                        <input type="file" id="file-upload" className="absolute w-full h-full opacity-0" onChange={handleFileChange}/>
                        <label htmlFor="file-upload" className="cursor-pointer relative w-full h-full flex items-center [font-family:'Inter-SemiBold',Helvetica] font-semibold text-variable-collection-text-2 text-[20px] tracking-[0] leading-[24px]">
                            {fileName}
                        </label>
                    </div>
                </div>
                <div className="flex items-start gap-[20px] px-[10px] py-0 self-stretch w-full flex-[0_0_auto] relative">
                    <div className="flex-col w-[120px] items-center justify-center gap-[10px] p-[10px] flex relative">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            내용
                        </div>
                    </div>
                    <div className="items-center flex-1 self-stretch grow rounded-[12px] overflow-hidden border-2 border-solid border-[#d9d9d9] flex relative">
                        <textarea className="w-full h-[260px] p-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[20px] tracking-[0] leading-[24px] whitespace-nowrap outline-none" placeholder="내용을 입력해주세요."/>
                    </div>
                </div>
                <div className="items-center justify-center gap-[10px] p-[10px] self-stretch w-full flex-[0_0_auto] flex relative">
                    <button type="submit" className="inline-flex flex-col items-center justify-center gap-[10px] px-[20px] py-[15px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden box-border">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            게시물 등록
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}
export default WritePage
