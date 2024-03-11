import SplitScreenSC from "./SplitScreenSC";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <SplitScreenSC>{children}</SplitScreenSC>;
}
