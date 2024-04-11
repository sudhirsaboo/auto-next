import { models } from "../database/models";
// ----------------------------------------------------------------
export async function create_user({ firstName, lastName, status }) {
    const users = await models.user.create({
        firstName: firstName,
        lastName: lastName,
    });
    return users.dataValues;
}

//--------------------------------------------------------------------------
export async function fetch_users() {
    const users = await models.user.findAll();
    return users;
}
