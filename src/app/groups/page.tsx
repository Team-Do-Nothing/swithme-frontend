'use client';

import React, {useEffect, useState} from 'react';

import LoadingPage from "../loading";
import CardSearch from "@/components/CardSearch";
import CardPagination from "@/components/CardPagination";
import Link from "next/link";
import Card from "@/components/Card";
import CardFilter from "@/components/CardFilter";

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
            <div className="flex flex-col justify-center border-b">
                <CardFilter />
                <CardSearch getCardResults={(results)=>setGroups(results)}/>
            </div>
            <ul>
                {groups.map((group)=>(
                    <li key={group.study_id}>
                        <Link href={`/groups/${group.study_id}`}>
                            <Card params={group} />
                        </Link>
                    </li>
                ))}
            </ul>
            <CardPagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
        </>
    );
};

export default GroupsPage;