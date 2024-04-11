import { fetch_users, create_user } from "@/service/userService";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const all_users = await fetch_users();
    return Response.json(all_users);
}

export async function POST(request) {
    const data = await request.json();
    const created_user = await create_user(data);
    return Response.json(created_user);
}
