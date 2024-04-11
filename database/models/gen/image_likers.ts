import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { image, imageId } from './image';
import type { user, userId } from './user';

export interface image_likersAttributes {
  created_date?: Date;
  user_id: number;
  image_id: number;
}

export type image_likersPk = "user_id" | "image_id";
export type image_likersId = image_likers[image_likersPk];
export type image_likersOptionalAttributes = "created_date";
export type image_likersCreationAttributes = Optional<image_likersAttributes, image_likersOptionalAttributes>;

export class image_likers extends Model<image_likersAttributes, image_likersCreationAttributes> implements image_likersAttributes {
  created_date?: Date;
  user_id!: number;
  image_id!: number;

  // image_likers belongsTo image via image_id
  image!: image;
  getImage!: Sequelize.BelongsToGetAssociationMixin<image>;
  setImage!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createImage!: Sequelize.BelongsToCreateAssociationMixin<image>;
  // image_likers belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_likers {
    return image_likers.init({
    created_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'image',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'image_likers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "image_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "FKha101mqoaavr9pujyj799ii5q",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
