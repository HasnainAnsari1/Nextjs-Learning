import { NextResponse } from "next/server";

interface User {
    id: Number,
    name: String,
    email: String
}

interface CreateUser {
    name: string,
    email: string
}

const users: User[] = [
    { id: 1, name: "hasnain", email: "hasnain@gmail.com" },
    { id: 2, name: "hussain", email: "hussain@gmail.com" },
]

// To Get All Users

export function GET() {
    return NextResponse.json({
        message: 'Fetch Succesfully',
        users: users
    })
}

// To Add New User

export async function POST(req: Request) {
    const body: CreateUser = await req.json()
    const NewUser: User = {
        id: users.length + 1,
        name: body.name,
        email: body.email
    }
    users.push(NewUser)

    return NextResponse.json({
        message: "User Created Successful",
        users: NewUser
    })
}

