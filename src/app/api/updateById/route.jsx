
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req) {
    const body = await req.json()
    try {
        const rslt = await prisma.note.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
                type: body.type
            }
        });
        return new NextResponse(JSON.stringify(rslt), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
};
