import { NextResponse } from "next/server";

const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET;

export async function POST(request) {
  const data = {
    name: "BUNNYFIEDLABS",
    email: "info@bunnyfiedlabs.com",
    website: "bunnyfiedlabs.com",
  };
  const time = {
    expiresIn: 3000, // 50min
  };
  const token = jwt.sign(data, jwtSecretKey, time);
  return NextResponse.json(
    {
      token,
    },
    {
      status: 200,
    }
  );
}
