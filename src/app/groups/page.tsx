'use client';
import React, {useEffect, useState} from 'react';
import CardList from "@/components/CardList";
import LoadingPage from "../loading";
import CardSearch from "@/components/CardSearch";
import CardPagination from "@/components/CardPagination";

interface Group {
    study_id: string;
    title: string;
    category_name: string;
    number_of_members: number;
    member_name: string;
    study_info: string;
    study_status: number;
    region_name: string;
}

const GroupsPage = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = 20;

    useEffect(()=>{
        const fetchGroups = async () => {
            const res = await fetch('/api/groups');
            const data = await res.json();
            setGroups(data);
            setLoading(false);
        }

        fetchGroups();
    }, []);

    if(loading){
        return <LoadingPage />;
    }

    return (
        <>
            <div className="flex flex-col justify-center border-b gap-4">
                <div className=" gap-4 sm:gap-8 flex pb-2 border-b-[2px] border-gray-300">
                    {['전체', '모집 중', '모집 완료'].map(label => (
                        <span key={label} className="cursor-pointer hover:font-bold">{label}</span>
                    ))}
                </div>
                <CardSearch getCardResults={(results)=>setGroups(results)}/>
            </div>
            <CardList groups={groups}/>
            <CardPagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
        </>
    );
};

export default GroupsPage;
