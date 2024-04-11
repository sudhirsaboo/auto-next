import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface user_friendsAttributes {
  user_id: number;
  friend_id: number;
}

export type user_friendsPk = "user_id" | "friend_id";
export type user_friendsId = user_friends[user_friendsPk];
export type user_friendsCreationAttributes = user_friendsAttributes;

export class user_friends extends Model<user_friendsAttributes, user_friendsCreationAttributes> implements user_friendsAttributes {
  user_id!: number;
  friend_id!: number;

  // user_friends belongsTo user via friend_id
  friend!: user;
  getFriend!: Sequelize.BelongsToGetAssociationMixin<user>;
  setFriend!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createFriend!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_friends belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_friends {
    return user_friends.init({
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    friend_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_friends',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "friend_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "FK9i7cldnk7cx2g47qex8ovm2ah",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
