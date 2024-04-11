import { fetch_medium_users,create_medium_user } from "@/service/dbService";
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const all_users = await fetch_medium_users();
    return Response.json(all_users);
}


export async function POST(request) {
    const data = await request.json();
    const created_user = await create_medium_user(data);
    return Response.json(created_user);
}

