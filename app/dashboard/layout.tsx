"use client";
import TreeMenu from "@/liquid/TreeMenu/TreeMenu";
import SplitScreen from "@/liquid-layouts/SplitScreen";
import Menu from "../side-nav.json";

const args = (props: any) => {
  return {
    leftWidth: 400,
    Header: () => {
      return (
        <div style={{ display: "flex", backgroundColor: "red" }}>
          <h1>Header</h1>
        </div>
      );
    },
    Left: () => {
      return <TreeMenu dataSource={Menu.json} />;
    },
    Right: () => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <div
            style={{
              backgroundColor: "orange",
            }}
          >
            <h1>Tabs</h1>
            {props.children}
          </div>
        </div>
      );
    },
  };
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const params = args({ children });
  return (
    <section>
      <SplitScreen
        Left={params.Left}
        Right={params.Right}
        Header={params.Header}
        leftWidth="400"
      ></SplitScreen>
    </section>
  );
}
