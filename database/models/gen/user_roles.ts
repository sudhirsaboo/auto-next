import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { perm_role, perm_roleId } from './perm_role';
import type { user, userId } from './user';

export interface user_rolesAttributes {
  user_id: number;
  roles_id: number;
}

export type user_rolesPk = "user_id" | "roles_id";
export type user_rolesId = user_roles[user_rolesPk];
export type user_rolesCreationAttributes = user_rolesAttributes;

export class user_roles extends Model<user_rolesAttributes, user_rolesCreationAttributes> implements user_rolesAttributes {
  user_id!: number;
  roles_id!: number;

  // user_roles belongsTo perm_role via roles_id
  role!: perm_role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<perm_role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<perm_role, perm_roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<perm_role>;
  // user_roles belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_roles {
    return user_roles.init({
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    roles_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'perm_role',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "roles_id" },
        ]
      },
      {
        name: "FKarcp45056l5urbaprua5mvabv",
        using: "BTREE",
        fields: [
          { name: "roles_id" },
        ]
      },
    ]
  });
  }
}
