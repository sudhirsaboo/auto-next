import Navbar from "./navbar";
// import { auth } from "./auth";
import { createClient } from "@/utils/auth/supabase/server";

export default async function Nav() {
  //  const session = await auth();
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <Navbar user={user} />;
}
