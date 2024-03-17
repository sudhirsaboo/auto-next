import Table from "./Table";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
//import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "@/liquid-styles/main.scss";

export default function Page(props) {
    return (
        <div
            style={
                {
                    // display: "flex",
                    // backgroundColor: "grey",
                    // height: "100%",
                    //overflow: "auto",
                    //justifyContent: "center",
                    //flexFlow: "row wrap",
                }
            }
        >
            <PrimeReactProvider>
                <Table {...props} />
            </PrimeReactProvider>
        </div>
    );
}
