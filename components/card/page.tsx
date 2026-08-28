// This is Static Card

// export default function Card(){
//     return(
//         <div className="w-2xl bg-gray-300 text-center rounded-2xl">
//             <h1>Heading</h1>
//             <h3>this is paragraph</h3>
//         </div>
//     )
// }

// This is Dynamic Card

// interface cardData {
//     heading: string,
//     para:string
// }

// export default function Card({heading,para}:cardData){
//     return(
//         <div className="w-2xl bg-gray-300 text-center rounded-2xl mt-1 text-black ">
//             <h1>{heading}</h1>
//             <h3>{para}</h3>
//         </div>
//     )
// }

// To Fetch Data 

type post={
    id:number;
    name:string;
    email:string
}


export default async function Card(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const post = await data.json()
    return(
        <ul>
            {post.map((post:post)=>(
                <li key={post.id}>{post.name}--{post.email}</li>
            ))}
        </ul>
    )
}