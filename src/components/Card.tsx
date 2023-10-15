import React from 'react';

interface CardProps {
    params: {
        study_id: string;
        title: string;
        category_name: string;
        number_of_members: number;
        member_name: string;
        study_info: string;
        study_status: number;
        region_name: string;
    },
}

const getStatusLabel = (status: number) => {
    const statusLabels = ["모집 진행중", "모집 완료", "스터디 종료"];
    return statusLabels[status] || "";
};

const getStatusBg = (status: number) => {
    const statusColors = ["bg-green-500", "bg-yellow-500", "bg-gray-500"];
    return statusColors[status] || "";
};

const Card: React.FC<CardProps> = ({
                                       params: {
                                           study_id,
                                           title,
                                           category_name,
                                           number_of_members,
                                           member_name,
                                           study_info,
                                           study_status,
                                           region_name
                                       }
                                   }) => {
    return (
        <article className="p-4 w-full">
            <div className="bg-white shadow-2xl rounded-lg p-4 md:p-10 relative w-full text-center lg:text-left">
                <header className="flex flex-col lg:flex-row justify-center lg:justify-between items-center pt-4">
                    <div className="flex justify-start items-center gap-3 mb-4 flex-1">
                        <span className={`flex items-center ${getStatusBg(study_status)} text-white px-4 py-1 rounded-full font-semibold`}>
                            {getStatusLabel(study_status)}
                        </span>
                        <h1 className="font-bold text-lg md:text-xl">{title}</h1>
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-end gap-3 md:gap-4 flex-1">
                        <span className="text-center whitespace-nowrap md:text-base bg-blue-500 text-gray-50 rounded-xl p-0.5 md:p-1">{region_name}</span>
                        <span className="text-center whitespace-nowrap md:text-base bg-orange-500 text-gray-50 rounded-xl p-0.5 md:p-1">{category_name}</span>
                        <span className="text-center whitespace-nowrap md:text-base bg-purple-500 text-gray-50 rounded-xl p-0.5 md:p-1">{number_of_members}명</span>
                    </div>
                </header>
                <main className="mt-4 mb-2">
                    <p className="text-gray-700">{study_info}</p>
                </main>
                <footer>
                    <span className="text-gray-600">작성자: <strong>{member_name}</strong></span>
                </footer>
            </div>
        </article>

    );
};

export default Card;