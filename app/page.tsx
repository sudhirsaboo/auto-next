import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/dashboard/events">
        <a>My second page</a>
      </Link>
      <Link href="/dashboard/submissions">
        <a>My third page</a>
      </Link>
    </div>
  );
}
