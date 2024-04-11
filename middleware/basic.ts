import { type NextRequest, NextResponse } from 'next/server';

export const verifyUrl = async (req: NextRequest) => {
    let response = NextResponse.next({
        request: {
          headers: req.headers
        }
      });

    try {
        console.log("sidhir")
        const url = new URL(req.url)
        const test_param = url.searchParams.get("test_param")

          if (test_param != "test") {
            throw {
                error_code: "basicMiddleware",
                message:
                    "test_param must be equal to test to pass basicMiddleware",
            };
        }
    
    } catch (e) {
        console.error(e);
        return Response.json(
            { success: false, message: 'authentication failed' },
            { status: 401 }
          )
    }
    return response;
}
/* 
const basicMiddleware = (handler) => {
    return async (req, res) => {
        try {
            // Write your customized validation.
            // Validating query params for example

            if (req.query.test_param != "test") {
                return res.status(401).json({
                    error_code: "basicMiddleware",
                    message:
                        "test_param must be equal to test to pass basicMiddleware",
                });
            }

            return handler(req, res);
        } catch (error) {
            return res.status(401).json({
                error_code: "basicMiddleware",
                message: err.message,
            });
        }
    };
}; */

export default verifyUrl;
