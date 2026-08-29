import { NextResponse } from "next/server";

interface User {
    id: Number,
    name: String,
    email: String
}

const users: User[] = [
    { id: 1, name: "hasnain", email: "hasnain@gmail.com" },
    { id: 2, name: "hussain", email: "hussain@gmail.com" },
]

// To Update Specific User With ID

interface Routeparam {
    params: Promise<{ id: string }>
}

interface updatedUserData {
    name?: string,
    email?: string
}

export async function PUT(req: Request, { params }: Routeparam) {
    const { id } = await params
    const body: updatedUserData = await req.json();
    const userID = Number(id);
    const searchUser = users.find((user) => user.id === userID)
    if (!searchUser) {
        return NextResponse.json({
            success: false,
            message: "User Not Found",
        },
            { status: 404 }
        )
    }

    return NextResponse.json({
        success: true,
        message: "User Found Successfuly",
        user: body
    })

}

// To delete Specific User With ID

export async function DELETE(req: Request, { params }: Routeparam) {
    const { id } = await params;
    const userId = Number(id);
    const searchUser = users.find((user) => user.id === userId)
    if (!searchUser) {
        return NextResponse.json({
            success: false,
            message: "User Not Found",
        },
            { status: 404 }
        )
    }
    if (searchUser) {
        const deleteuser = users.filter((user) => user.id !== userId)
        return NextResponse.json({
            message: 'User Deleted Successfuly',
            deleteduser: deleteuser,
        })
    }

}