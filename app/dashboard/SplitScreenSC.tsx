import Menu from "../side-nav.json";
import TreeMenu from "@/liquid/TreeMenu/TreeMenu";
import SplitScreen from "@/liquid-layouts/SplitScreen";
import Nav from "../app-header/nav";
import Link from "next/link";

export default async function Page(props: any) {
  return (
    <SplitScreen
      Left={<TreeMenu dataSource={Menu.json} linkClass={Link} />}
      Right={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "auto",
          }}
        >
          <div
            style={{
              backgroundColor: "orange",
            }}
          >
            <h1>Tabs</h1>
          </div>
          {props.children}
        </div>
      }
      Header={<Nav></Nav>}
      leftwidth="300"
    ></SplitScreen>
  );
}
