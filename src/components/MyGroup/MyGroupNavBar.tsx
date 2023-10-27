'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";

interface NavLinkProps {
    href: string;
    label: string;
}

const navItems = [
    { href: "/mygroup/notice", label: "공지 사항" },
    { href: "/mygroup/calendar", label: "일정" },
    { href: "/mygroup/board", label: "게시판" },
    { href: "/mygroup/challenge", label: "챌린지" },
    { href: "/mygroup/member", label: "멤버" },
];

const NavLink = ({ href, label }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <div className={`flex-1 flex flex-col items-center justify-center gap-[10px] px-[30px] py-[15px] relative [border-bottom-style:solid] border-variable-collection-secondary ${isActive ? 'z-[4] bg-variable-collection-primary text-white' : 'text-black'}`}>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    {label}
                </div>
            </div>
        </Link>
    );
};

const MyGroupNavBar = () => (
    <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] rounded-[24px] overflow-hidden border-[3px] border-solid border-variable-collection-primary">
        {navItems.map(item => (
            <div className="flex-1">
                <NavLink key={item.label} {...item} />
            </div>
        ))}
    </div>
);


export default MyGroupNavBar;
