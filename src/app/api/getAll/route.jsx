
import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const rslt = await prisma.note.findMany();
        return new NextResponse(JSON.stringify(rslt), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
};
