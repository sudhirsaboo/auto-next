import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { role_activities, role_activitiesId } from './role_activities';
import type { user, userId } from './user';

export interface perm_activityAttributes {
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

export type perm_activityPk = "id";
export type perm_activityId = perm_activity[perm_activityPk];
export type perm_activityOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type perm_activityCreationAttributes = Optional<perm_activityAttributes, perm_activityOptionalAttributes>;

export class perm_activity extends Model<perm_activityAttributes, perm_activityCreationAttributes> implements perm_activityAttributes {
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

  // perm_activity belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // perm_activity hasMany role_activities via activities_id
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
  // perm_activity belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // perm_activity belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof perm_activity {
    return perm_activity.init({
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
    tableName: 'perm_activity',
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
        name: "FK8v24j4ach0g0atg1me3rgbirc",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKsa15wpliutpxkt2kpohrh4ucb",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKn5k3ptx8mm84x28l2lcqrl94u",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
