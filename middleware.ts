import { type NextRequest } from "next/server";
import verifyUrl from "./middleware/basic";
import { stackMiddlewares } from "@/middleware/stackHandler";
import { withUser } from "@/middleware/withUser";
import { withTest } from "@/middleware/withTest";
import { withJWT } from "@/middleware/withJWT";
//const middlewares = [withUser,withTest];
const middlewares = [withUser, withJWT];

export default stackMiddlewares(middlewares);

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
