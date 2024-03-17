"use client";
/*
 * Created by ssaboo on 4/30/16.
 */
import * as React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/liquid-layouts/card/index";
import {
    DateEntryField,
    Buttons,
    Button,
    DisplayField,
    TimeEntryField,
} from "@/liquid-forms/index";
import Page from "@/liquid-layouts/theater/Page";

import Editor from "./Editor";
//import { DeleteIcon, EditIconWOA } from "@/liquid-utils/icon/index";
import { EditIcon } from "@/liquid-utils/icon/index";

import Store from "@/liquid-domain/Programs";

import DataTable from "@/liquid-table/DataTable";
import { Dialog } from "primereact/dialog";
import moment from "moment";

class ProgramTable extends React.Component<any, any> {
    static defaultProps = {
        store: Store,
    };
    showEditor = (row) => {
        row.description = "HARD";
        row.statement = "HARD";
        row.technical = 7;
        row.super = true;
        row.fee = 100;
        TimeEntryField.fillDateAndTime("start", row);
        row.tags = ["test1", "test2"];

        const ui = { ...this.state.ui, editor: true, row: row };

        this.setState({ ui });
    };
    closeEditor = () => {
        const ui = { ...this.state.ui, editor: false };

        this.setState({ ui });
    };
    state = {
        entities: {
            programs: null,
        },
        playlist: null,
        filter: null,
        programs: null,
        ui: { editor: false, row: {} },
    };
    async componentDidMount() {
        const { dispatch, store, playlist, filter } = this.props;
        // dispatch(store.load(playlist, filter));
        const type = await store.loadPlain(playlist, filter);
        const entities = { ...this.state.entities, ...type.entities };
        let programs = {};
        programs[type.playlist] = { items: type.entityIds, page: type.page };
        this.setState({ entities, programs, playlist: type.playlist });
    }

    columns = [
        {
            name: "",
            key: "edit",
            field: "edit",
            width: 50,
            resizable: true,
            getRowMetaData: (row) => {
                return { post: row, user: row.user };
            },
            formatterEasy: (row) => {
                return (
                    <EditIcon onClick={() => this.showEditor(row)}></EditIcon>
                );
            },
        },
        {
            name: "",
            key: "delete",
            field: "delete",

            width: 50,
            resizable: true,

            getRowMetaData: (row) => {
                return { post: row, user: row.user };
            },
            formatterEasyx: (ex) => {
                const e = ex.dependentValues;
                return {
                    /* <DeleteIcon
                        Editor={Editor}
                        {...this.props}
                        {...e}
                    ></DeleteIcon> */
                };
            },
        },
        {
            name: "Avatar",
            field: "avatar",

            width: 100,
            resizable: false,
            getRowMetaData: (row) => {
                return { post: row, user: row.user };
            },
            formatteEasyx: (row) => {
                return (
                    <img
                        className="avatar"
                        src={row.getCover(this.props)}
                    ></img>
                );
            },
        },
        {
            key: "id",
            name: "id",
            field: "id",

            width: 80,
            resizable: true,
        },
        {
            key: "name",
            name: "name",
            field: "name",

            width: 200,
            resizable: true,
            editable: true,
        },
        {
            name: "start",
            key: "start",
            field: "start",

            editor: (
                <DateEntryField
                    name="start"
                    {...this.props}
                    type="Date"
                ></DateEntryField>
            ),

            formatterEasy: (row) => {
                return (
                    <DisplayField
                        name="start"
                        value={row.start}
                        {...this.props}
                        label=""
                        type="DateTime"
                    />
                );
            },
        },
        {
            key: "organizationName",
            name: "organizationName",
            field: "organizationName",

            width: 200,
            resizable: true,
            getRowMetaData: (row) => {
                return { post: row, user: row.user };
            },
            formatterEasy: (row) => {
                let name = "";
                if (row.organization) {
                    name = row.organization.displayName;
                }

                return <span>{name}</span>;
            },
        },
    ];

    add = () => {
        const { dispatch, onClick } = this.props;

        /* if (Editor) {
            dispatch(
                changeModal("modal", { store: Store, ...this.props }, Editor)
            );
        } else if (onClick) {
            onClick();
        } */
    };

    save = () => {};

    render() {
        const { playlist, entities, programs } = this.state;

        const data = entities?.programs;

        if (!programs) return null;

        const list = programs[playlist];
        if (!list || !list.items) return null;

        const data2 = list.items.map((id) => {
            const data3 = data[id];
            delete data3._links;
            //delete data3.organization;

            return data3;
        });
        console.log(data2);

        return (
            <Page>
                <Card stretch="true">
                    <CardHeader label={"Manage Programs"}></CardHeader>
                    <CardContent id="user_table">
                        <DataTable
                            // ref={dt}
                            value={data2}
                            //selection={selectedProducts}
                            /*onSelectionChange={(e) =>
                                setSelectedProducts(e.value)
                            }*/
                            columns={this.columns}
                        ></DataTable>
                    </CardContent>

                    <CardFooter>
                        <Buttons>
                            <Button label="Save" onClick={this.save} />

                            <Button label="Add New" onClick={this.add} />
                        </Buttons>
                    </CardFooter>
                </Card>
                <Dialog
                    visible={this.state.ui.editor}
                    onHide={this.closeEditor}
                >
                    <Editor
                        {...this.props}
                        dismiss={this.closeEditor}
                        post={this.state.ui.row}
                    ></Editor>
                </Dialog>
            </Page>
        );
    }
}
export default ProgramTable;
