import { getUser } from "@/utils/auth/auth-helpers/spring/server";
import Navbar from "./navbar";

export default async function Nav() {
  const user = await getUser();
  console.log("sudhir");

  console.log(user);
  return <Navbar user={user} />;
}
