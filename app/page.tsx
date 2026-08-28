// This is Main Page localhost:3000/

import Counter from "@/components/counter/Counter";
import Link from "next/link";
import serverAction from "./actions/serverAction";

export default function Home(){

    type User={
        id:number,
        name:string,
    }

    const users: User[] = [
        {id:1,name:"hasnain"},
        {id:2,name:"Hassan"},
        {id:3,name:"Shaheer"}
    ]

      return(
// if you want to intracte with user you should declare that component 
// or page as 'use client' otherwise nextjs dont allow
// I have Create Couter components as client Now i Can use Client component in server Component
        <div>
          <h1>hello From homepage</h1>
          <Counter />
          <h2>Go to your profile page</h2>
          
          {users.map((user)=>(
            <Link key={user.id} href={`/profile/${user.name}`}>
            <h1>{user.name}</h1>
            </Link>
          ))}
          <button className="bg-white text-black rounded-4xl px-1 cursor-pointer" onClick={serverAction}>Server Action</button>
        </div>
      )
}