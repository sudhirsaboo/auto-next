import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { perm_activity, perm_activityId } from './perm_activity';
import type { perm_role, perm_roleId } from './perm_role';

export interface role_activitiesAttributes {
  role_id: number;
  activities_id: number;
}

export type role_activitiesCreationAttributes = role_activitiesAttributes;

export class role_activities extends Model<role_activitiesAttributes, role_activitiesCreationAttributes> implements role_activitiesAttributes {
  role_id!: number;
  activities_id!: number;

  // role_activities belongsTo perm_activity via activities_id
  activity!: perm_activity;
  getActivity!: Sequelize.BelongsToGetAssociationMixin<perm_activity>;
  setActivity!: Sequelize.BelongsToSetAssociationMixin<perm_activity, perm_activityId>;
  createActivity!: Sequelize.BelongsToCreateAssociationMixin<perm_activity>;
  // role_activities belongsTo perm_role via role_id
  role!: perm_role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<perm_role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<perm_role, perm_roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<perm_role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_activities {
    return role_activities.init({
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'perm_role',
        key: 'id'
      }
    },
    activities_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'perm_activity',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'role_activities',
    timestamps: false,
    indexes: [
      {
        name: "FKgo56kxti83owdccdhbrsisoet",
        using: "BTREE",
        fields: [
          { name: "activities_id" },
        ]
      },
      {
        name: "FKt9tmw7ia7bphxduo7i1nl1qah",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
