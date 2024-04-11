import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { image, imageId } from './image';

export interface album_imagesAttributes {
  album_id: number;
  image_id: number;
}

export type album_imagesPk = "album_id" | "image_id";
export type album_imagesId = album_images[album_imagesPk];
export type album_imagesCreationAttributes = album_imagesAttributes;

export class album_images extends Model<album_imagesAttributes, album_imagesCreationAttributes> implements album_imagesAttributes {
  album_id!: number;
  image_id!: number;

  // album_images belongsTo album via album_id
  album!: album;
  getAlbum!: Sequelize.BelongsToGetAssociationMixin<album>;
  setAlbum!: Sequelize.BelongsToSetAssociationMixin<album, albumId>;
  createAlbum!: Sequelize.BelongsToCreateAssociationMixin<album>;
  // album_images belongsTo image via image_id
  image!: image;
  getImage!: Sequelize.BelongsToGetAssociationMixin<image>;
  setImage!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createImage!: Sequelize.BelongsToCreateAssociationMixin<image>;

  static initModel(sequelize: Sequelize.Sequelize): typeof album_images {
    return album_images.init({
    album_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'album',
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
    tableName: 'album_images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "album_id" },
          { name: "image_id" },
        ]
      },
      {
        name: "FKtalx8yv8yt68e2x30acfbs4lv",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
  }
}
