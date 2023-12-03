
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json()
    try {
        const rslt = await prisma.note.create({
            data: {
                title: body.title,
                content: body.content,
                type: body.noteType
            }
        })
        return new NextResponse(JSON.stringify(rslt), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
};


