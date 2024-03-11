import Link from "next/link";

export default function Page(props: any) {
  return (
    <div>
      <Link href="/dashboard/events">Events </Link>
      <Link href="/dashboard/submissions">submissions </Link>
      <a href="/dashboard/events">Events a</a>
    </div>
  );
}
