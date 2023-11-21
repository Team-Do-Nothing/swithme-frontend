'use client';

import React, {useEffect, useState} from 'react';
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import NoticeCard from "@/components/MyGroup/NoticeCard";
import LoadingPage from "@/app/loading";
import CardPagination from "@/components/CardPagination";
import Link from "next/link";
import {usePathname} from "next/navigation";
import WriteButton from "@/components/MyGroup/WriteButton";

interface NoticesProps {
    noticeId: number;
    title: string;
    content: string;
    writer: string;
    likes: number;
    comments: number;
}

const NoticePage = () => {
    const [notices, setNotices] = useState<NoticesProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = 20;
    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    const groupId = pathSegments[2];

    useEffect(() => {
        const fetchNotices = async () => {
            const res = await fetch('/api/mygroup/notice');
            const data = await res.json();
            setNotices(data);
            setLoading(false);
        }

        fetchNotices();
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
                            {notices.map((notice) => (
                                <li key={notice.noticeId} className="last:mb-0">
                                    <Link href={`${pathname}/${notice.noticeId}`}>
                                        <NoticeCard params={notice}/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-between p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                            <div></div>
                            <CardPagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                                            maxPage={maxPage}/>
                            <Link href={`/mygroup/${groupId}/write`}>
                                <WriteButton />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NoticePage;

