import medium_users from "./medium_users";
import { initModels } from "./gen/init-models";

import connection from "../connection";

var models = initModels(connection);

export { medium_users, models };
