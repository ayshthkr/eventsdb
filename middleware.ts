import {createMiddlewareClient} from "@/lib/supabase/middleware";
import {NextRequest} from "next/server";

export async function middleware(request: NextRequest) {
    const {supabase, response} = createMiddlewareClient(request);
    await supabase.auth.getUser();
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}