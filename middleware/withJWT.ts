import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { NextMiddleware } from "next/server";
import { headers } from "next/headers";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

function getSearchParam(param: string, url: any) {
    return url.searchParams.get(param);
}
export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

const jwtSecretKey = process.env.JWT_SECRET;

export const withJWT: MiddlewareFactory = (next) => {
    return async (req: NextRequest, _next: NextFetchEvent) => {
        if (req.nextUrl.pathname.startsWith("/mid-sample/api_two")) {
            return next(req, _next);
        }
        try {
            // Get the token from header
            const headersList = headers();
            const authorizationToken = headersList.get("authorization");
            // Validate the token
            console.error("Sudhir");
            console.error(authorizationToken);

            if (authorizationToken) {
                console.error("verifing");
                const data = await jwtVerify(
                    authorizationToken,
                    new TextEncoder().encode(jwtSecretKey)
                );
                console.error("verified");

                // Attaching the authenticated data to the request object
                req.auth_data = data;

                return next(req, _next);
            }

            // Token has been expired or we detected a fruad attack
            return Response.json(
                { success: false, message: "JWT authentication failed" },
                { status: 401 }
            );
        } catch (error) {
            console.error(error);

            console.trace();
            return Response.json(
                { success: false, message: "JWT 2authentication failed" },
                { status: 401 }
            );
        }
        return next(req, _next);
    };
};
