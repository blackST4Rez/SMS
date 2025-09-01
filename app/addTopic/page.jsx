"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddTopic(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();


         // console.log("hi")
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
             className="border border-slate-500  px-8 py-2"  type="text" placeholder="Student Name"/>

            <input 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border border-slate-500  px-8 py-2"  type="text" placeholder="Course"/>

            <button  type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
                Add Student
            </button>


        </form>
    );
}
}