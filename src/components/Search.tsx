'use client'
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import Image from "next/image";



const Search = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
    console.log(search)
    return (
        <form onSubmit={handleSubmit}
            className="w-50 flex justify-center md:justify-between">
            <input type="text"
                value={search}
                className="p-2 text-black w-80 text-xl rounded-xl"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter text here"
            />
            <button className="p-2 text-blue-500 text-xl rounded-xl bg-slate-100 font-bold ml-2">
                <Image src="/rocket-solid.svg" alt="Roeckt" width={30} height={30} />
                {/* 🚀 */}
            </button>
            
        </form>
    );
};

export default Search;