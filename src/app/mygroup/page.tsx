'use client';

import React, {useEffect, useState} from 'react';

import CardList from "@/components/CardList";
import LoadingPage from "@/app/loading";
import Link from "next/link";
import Card from "@/components/Card";

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

const MyGroupPage = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState(true);

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
            <ul>
                {groups.map((group)=>(
                    <li key={group.study_id}>
                        <Link href={`/mygroup/${group.study_id}/notice`}>
                            <Card params={group} />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default MyGroupPage;
