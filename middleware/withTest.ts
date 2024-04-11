import {
    NextFetchEvent,
    NextRequest,
    NextResponse
  } from "next/server";
  
  import {
    NextMiddleware,
  } from "next/server";
  
  function getSearchParam(param: string, url: any) {
    return url.searchParams.get(param);
  }
  export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
  
  export const withTest: MiddlewareFactory = (next) => {
    return async(request: NextRequest, _next: NextFetchEvent) => {
      const url = new URL(request.url)
      const test_param = url.searchParams.get("test_param")

      if (test_param != "test") {
        return Response.json(
          { success: false, message: 'authentication failed' },
          { status: 401 }
        )
    }
      return next(request, _next);
    };
  };