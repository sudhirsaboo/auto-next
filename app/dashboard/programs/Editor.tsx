/* eslint-disable react/no-string-refs */
import * as React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/liquid-layouts/card";
import {
    Form,
    FieldGroup,
    DateEntryField,
    EntryField,
    SelectField,
    TextArea,
    CoverSelect,
    Button,
    Buttons,
    TimeEntryField,
    CheckBox,
    Slider,
    TagsField,
} from "@/liquid-forms/index";

import FormatUtils from "@/liquid-utils/FormatUtils";

//import UploadStore from "../../../actions/upload";
import ProgramStore from "@/liquid-domain/Programs";
import OrgStore from "@/liquid-domain/Organizations";

import moment from "moment";

class CreateProgram extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    state = {
        entities: {
            organizations: null,
        },
        organizations: null,
    };
    static defaultProps = {
        post: ProgramStore.create(),
    };

    async componentDidMount() {
        const { dispatch } = this.props;
        const type = await OrgStore.loadPlain();
        const entities = { ...this.state.entities, ...type.entities };

        // orgazniations ids
        let organizations = {};
        organizations[type.playlist] = {
            items: type.entityIds,
            page: type.page,
        };
        this.setState({ entities, organizations, playlist: type.playlist });
    }

    onSubmit = async () => {
        const { dispatch, store, playlist, post } = this.props;

        const data = this.refs.form["collect"](post.id).form;
        if (!data) return;
        Object.assign(post, data);
        post.setCover(post.cover);

        data.start = TimeEntryField.mergeDateAndTime(
            data.start,
            data.startTime
        );
        alert(TimeEntryField.announceDateTime(data.start));
        //alert(data.technical);
        // alert(data.tags);

        const context = { playlist };
        await store.insert(context, post);

        this.props.dismiss();
    };

    onCancel = () => {
        this.props.dismiss();
    };

    onSelectCover = async (files) => {
        const { dispatch, post } = this.props;
        const posts = await dispatch();
        // UploadStore.upload("PROGRAM", files, this)
        post.cover = posts[0];
    };

    onRemove = () => {
        const { post } = this.props;
        post.cover = null;
    };

    render() {
        const { store, post } = this.props;
        const { entities, organizations } = this.state;

        //const cover = post.getCoverO(this.props);

        const label = FormatUtils.title(store.getName(), null, post);

        return (
            <Card>
                <CardHeader label={label} onClose={this.onCancel}></CardHeader>
                <CardContent>
                    {/* <CoverSelect
                        ref="cover"
                        post={post}
                        cover={cover}
                        onSelect={this.onSelectCover}
                        onRemove={this.onRemove}
                    ></CoverSelect> */}
                    {/* <pre>{JSON.stringify(post, null, 2)}</pre>{" "} */}
                    <Form ref="form" model={post}>
                        <FieldGroup label="Identify">
                            <EntryField
                                name="name"
                                label="Title"
                                type="text"
                            ></EntryField>
                            <TextArea
                                name="statement"
                                label="Statement"
                                placeholder="Statement"
                                type="text"
                                field-type="textarea"
                            ></TextArea>
                        </FieldGroup>
                        <FieldGroup>
                            <SelectField
                                wholeObject
                                label="Parent Account"
                                select="organization"
                                name="id"
                                options={entities.organizations}
                                optionsId={organizations}
                                playlist={"organizations"}
                                required
                            ></SelectField>
                            {
                                <DateEntryField
                                    name="start"
                                    label="Start Date"
                                ></DateEntryField>
                            }
                            <TimeEntryField
                                name="startTime"
                                label="Start Time"
                                required={false}
                            ></TimeEntryField>
                            {/*  <DateEntryField
                                name="end"
                                label="Deadline"
                            ></DateEntryField>
                            <EntryField
                                name="fee"
                                label="Application Fee"
                                type="Currency"
                            ></EntryField> */}
                            <TextArea
                                name="description"
                                label="Description"
                                placeholder="Description"
                                type="text"
                                field-type="textarea"
                            ></TextArea>
                            <CheckBox name="super" label="Super"></CheckBox>
                            <Slider
                                config={{ pinned: true, snaps: true }}
                                name="technical"
                                label="Technical Competency"
                            />
                            <TagsField name="tags" label="Tags"></TagsField>
                        </FieldGroup>
                    </Form>
                </CardContent>
                <CardFooter>
                    <Buttons>
                        <Button
                            label="Cancel"
                            onClick={this.onCancel.bind(this)}
                        />
                        <Button label="Ok" onClick={this.onSubmit} />
                    </Buttons>
                </CardFooter>
            </Card>
        );
    }
}

/*
CreateProgram.propTypes = {
    post: PropTypes.object,
    user: PropTypes.object,
};
*/

export default CreateProgram;
