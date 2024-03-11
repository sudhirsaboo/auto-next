import { card } from "@/utils/skeleton";
export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "grey",
        height: "100%",
        overflow: "auto",
        justifyContent: "center",
        flexFlow: "row wrap",
      }}
    >
      {card(301)}
    </div>
  );
}
