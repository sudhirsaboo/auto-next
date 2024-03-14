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
//import OrgStore from "../../../actions/Organizations";
import ProgramStore from "@/store/Programs";
import { Check } from "lucide-react";

class CreateProgram extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        post: ProgramStore.create(),
    };

    componentDidMount() {
        const { dispatch } = this.props;
        // dispatch(OrgStore.load());
    }

    onSubmit = () => {
        const { dispatch, store, playlist, post } = this.props;

        const data = this.refs.form["collect"](post.id).form;
        if (!data) return;
        Object.assign(post, data);
        post.setCover(post.cover);

        const context = { playlist };
        dispatch(store.insert(context, post))
            .then(() => {})
            .catch(() => {});

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
        const { store, entities, organizations, post } = this.props;

        const cover = post.getCoverO(this.props);

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
                            {/*  <SelectField
                                wholeObject
                                label="Parent Account"
                                select="organization"
                                name="id"
                                options={entities.organizations}
                                optionsId={organizations}
                                playlist={"organizations"}
                                required
                            ></SelectField> */}
                            <DateEntryField
                                name="start"
                                label="Start Date"
                            ></DateEntryField>
                            <TimeEntryField
                                name="startTime"
                                label="Start Time"
                                required={false}
                            ></TimeEntryField>
                            <DateEntryField
                                name="end"
                                label="Deadline"
                            ></DateEntryField>
                            <EntryField
                                name="fee"
                                label="Application Fee"
                                type="Currency"
                            ></EntryField>
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
