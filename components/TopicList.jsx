import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from  "react-icons/hi"
import { cache } from "react";

const getTopics = async() => {
    try {
        // Use full URL for server-side rendering
        const baseUrl = process.env.NODE_ENV === 'production' ? 
            process.env.NEXT_PUBLIC_APP_URL || '' : 
            'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/topics`, {
            cache: 'no-store',
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }
        return await res.json();
    } catch (error) {
        console.log("Error loading topics:", error);
        return { topics: [] };
    }
};

export default async function TopicsList()
{
    const { topics = [] } = await getTopics() || {};

  return (
    <>
    {topics.map((t) => (
    <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
            <h2 className="font-bold text-2xl" >{t.title}</h2>
            <div>{t.description}</div>
        </div>

        <div className="flex gap-2" >
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24}/>
            </Link>
        </div>
    </div>

    ))}
   </>
  );
}
