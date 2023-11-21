'use client';

import React, {useEffect, useState} from 'react';
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import {usePathname} from "next/navigation";
import LoadingPage from "@/app/loading";
import Link from "next/link";
import NoticeCard from "@/components/MyGroup/NoticeCard";
import CardPagination from "@/components/CardPagination";

interface BoardsProps {
    noticeId: number;
    title: string;
    content: string;
    writer: string;
    likes: number;
    comments: number;
}

const BoardPage = () => {
    const [boards, setBoards] = useState<BoardsProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = 20;
    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    const groupId = pathSegments[2];

    useEffect(() => {
        const fetchBoards = async () => {
            const res = await fetch('/api/mygroup/notice');
            const data = await res.json();
            setBoards(data);
            setLoading(false);
        }

        fetchBoards();
    }, []);

    if (loading) {
        return <LoadingPage/>;
    }

    return (
        <>
            <MyGroupHeader/>
            <div className="flex flex-col items-center gap-[5px] relative">
                <div className="flex flex-col items-center gap-[10px] relative flex-1 self-stretch w-full grow">
                    <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                        <ul className="list-none w-full p-0 m-0">
                            {boards.map((board) => (
                                <li key={board.noticeId} className="mb-4 last:mb-0">
                                    <Link href={`${pathname}/${board.noticeId}`}>
                                        <NoticeCard params={board}/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-between p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                            <CardPagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                                            maxPage={maxPage}/>
                            <Link href={`/mygroup/${groupId}/write`}>
                                <button className="inline-flex flex-col items-center justify-center gap-[10px] px-[10px] py-[5px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden all-[unset] box-border">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        글쓰기
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BoardPage;
