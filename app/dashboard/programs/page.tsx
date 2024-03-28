import Table from "./Table";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
//import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primereact/resources/themes/mdc-light-deeppurple/theme.css";
import "@/liquid-styles/main.scss";

export default function Page(props) {
    return (
        <PrimeReactProvider>
            <Table {...props} />
        </PrimeReactProvider>
    );
}
