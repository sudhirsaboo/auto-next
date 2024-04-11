import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { image, imageId } from './image';

export interface image_tagsAttributes {
  image_id: number;
  tags?: string;
}

export type image_tagsOptionalAttributes = "tags";
export type image_tagsCreationAttributes = Optional<image_tagsAttributes, image_tagsOptionalAttributes>;

export class image_tags extends Model<image_tagsAttributes, image_tagsCreationAttributes> implements image_tagsAttributes {
  image_id!: number;
  tags?: string;

  // image_tags belongsTo image via image_id
  image!: image;
  getImage!: Sequelize.BelongsToGetAssociationMixin<image>;
  setImage!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createImage!: Sequelize.BelongsToCreateAssociationMixin<image>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_tags {
    return image_tags.init({
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'image',
        key: 'id'
      }
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'image_tags',
    timestamps: false,
    indexes: [
      {
        name: "FKga9qdchq195tgievhkrtfbu4i",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
  }
}
