import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { image, imageId } from './image';

export interface image_viewersAttributes {
  image_id: number;
  viewers?: string;
}

export type image_viewersOptionalAttributes = "viewers";
export type image_viewersCreationAttributes = Optional<image_viewersAttributes, image_viewersOptionalAttributes>;

export class image_viewers extends Model<image_viewersAttributes, image_viewersCreationAttributes> implements image_viewersAttributes {
  image_id!: number;
  viewers?: string;

  // image_viewers belongsTo image via image_id
  image!: image;
  getImage!: Sequelize.BelongsToGetAssociationMixin<image>;
  setImage!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createImage!: Sequelize.BelongsToCreateAssociationMixin<image>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_viewers {
    return image_viewers.init({
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'image',
        key: 'id'
      }
    },
    viewers: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'image_viewers',
    timestamps: false,
    indexes: [
      {
        name: "FKdit8i7hx4xpih6tvtokctd0c7",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
  }
}
