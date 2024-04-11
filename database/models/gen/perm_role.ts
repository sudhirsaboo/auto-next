import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { role_activities, role_activitiesId } from './role_activities';
import type { user, userId } from './user';
import type { user_roles, user_rolesId } from './user_roles';

export interface perm_roleAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type perm_rolePk = "id";
export type perm_roleId = perm_role[perm_rolePk];
export type perm_roleOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type perm_roleCreationAttributes = Optional<perm_roleAttributes, perm_roleOptionalAttributes>;

export class perm_role extends Model<perm_roleAttributes, perm_roleCreationAttributes> implements perm_roleAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // perm_role belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // perm_role hasMany role_activities via role_id
  role_activities!: role_activities[];
  getRole_activities!: Sequelize.HasManyGetAssociationsMixin<role_activities>;
  setRole_activities!: Sequelize.HasManySetAssociationsMixin<role_activities, role_activitiesId>;
  addRole_activity!: Sequelize.HasManyAddAssociationMixin<role_activities, role_activitiesId>;
  addRole_activities!: Sequelize.HasManyAddAssociationsMixin<role_activities, role_activitiesId>;
  createRole_activity!: Sequelize.HasManyCreateAssociationMixin<role_activities>;
  removeRole_activity!: Sequelize.HasManyRemoveAssociationMixin<role_activities, role_activitiesId>;
  removeRole_activities!: Sequelize.HasManyRemoveAssociationsMixin<role_activities, role_activitiesId>;
  hasRole_activity!: Sequelize.HasManyHasAssociationMixin<role_activities, role_activitiesId>;
  hasRole_activities!: Sequelize.HasManyHasAssociationsMixin<role_activities, role_activitiesId>;
  countRole_activities!: Sequelize.HasManyCountAssociationsMixin;
  // perm_role belongsToMany user via roles_id and user_id
  user_id_user_user_roles!: user[];
  getUser_id_user_user_roles!: Sequelize.BelongsToManyGetAssociationsMixin<user>;
  setUser_id_user_user_roles!: Sequelize.BelongsToManySetAssociationsMixin<user, userId>;
  addUser_id_user_user_role!: Sequelize.BelongsToManyAddAssociationMixin<user, userId>;
  addUser_id_user_user_roles!: Sequelize.BelongsToManyAddAssociationsMixin<user, userId>;
  createUser_id_user_user_role!: Sequelize.BelongsToManyCreateAssociationMixin<user>;
  removeUser_id_user_user_role!: Sequelize.BelongsToManyRemoveAssociationMixin<user, userId>;
  removeUser_id_user_user_roles!: Sequelize.BelongsToManyRemoveAssociationsMixin<user, userId>;
  hasUser_id_user_user_role!: Sequelize.BelongsToManyHasAssociationMixin<user, userId>;
  hasUser_id_user_user_roles!: Sequelize.BelongsToManyHasAssociationsMixin<user, userId>;
  countUser_id_user_user_roles!: Sequelize.BelongsToManyCountAssociationsMixin;
  // perm_role hasMany user_roles via roles_id
  user_roles!: user_roles[];
  getUser_roles!: Sequelize.HasManyGetAssociationsMixin<user_roles>;
  setUser_roles!: Sequelize.HasManySetAssociationsMixin<user_roles, user_rolesId>;
  addUser_role!: Sequelize.HasManyAddAssociationMixin<user_roles, user_rolesId>;
  addUser_roles!: Sequelize.HasManyAddAssociationsMixin<user_roles, user_rolesId>;
  createUser_role!: Sequelize.HasManyCreateAssociationMixin<user_roles>;
  removeUser_role!: Sequelize.HasManyRemoveAssociationMixin<user_roles, user_rolesId>;
  removeUser_roles!: Sequelize.HasManyRemoveAssociationsMixin<user_roles, user_rolesId>;
  hasUser_role!: Sequelize.HasManyHasAssociationMixin<user_roles, user_rolesId>;
  hasUser_roles!: Sequelize.HasManyHasAssociationsMixin<user_roles, user_rolesId>;
  countUser_roles!: Sequelize.HasManyCountAssociationsMixin;
  // perm_role belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // perm_role belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof perm_role {
    return perm_role.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    created_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    last_modified_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    last_modified_by_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    organization_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ent_org',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'perm_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FKrgl1jjmcjh2175tevtsf7pcr5",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK11qkcc0pdhftlsd7qe5mmviyt",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK86j990w2ekuhx8fxfqxfolvjr",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
