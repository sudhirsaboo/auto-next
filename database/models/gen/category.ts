import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';
import type { video, videoId } from './video';

export interface categoryAttributes {
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
  avatar_id?: number;
  cover_id?: number;
  parent_id?: number;
}

export type categoryPk = "id";
export type categoryId = category[categoryPk];
export type categoryOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "avatar_id" | "cover_id" | "parent_id";
export type categoryCreationAttributes = Optional<categoryAttributes, categoryOptionalAttributes>;

export class category extends Model<categoryAttributes, categoryCreationAttributes> implements categoryAttributes {
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
  avatar_id?: number;
  cover_id?: number;
  parent_id?: number;

  // category belongsTo category via parent_id
  parent!: category;
  getParent!: Sequelize.BelongsToGetAssociationMixin<category>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<category, categoryId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<category>;
  // category hasMany image via category_id
  images!: image[];
  getImages!: Sequelize.HasManyGetAssociationsMixin<image>;
  setImages!: Sequelize.HasManySetAssociationsMixin<image, imageId>;
  addImage!: Sequelize.HasManyAddAssociationMixin<image, imageId>;
  addImages!: Sequelize.HasManyAddAssociationsMixin<image, imageId>;
  createImage!: Sequelize.HasManyCreateAssociationMixin<image>;
  removeImage!: Sequelize.HasManyRemoveAssociationMixin<image, imageId>;
  removeImages!: Sequelize.HasManyRemoveAssociationsMixin<image, imageId>;
  hasImage!: Sequelize.HasManyHasAssociationMixin<image, imageId>;
  hasImages!: Sequelize.HasManyHasAssociationsMixin<image, imageId>;
  countImages!: Sequelize.HasManyCountAssociationsMixin;
  // category hasMany video via category_id
  videos!: video[];
  getVideos!: Sequelize.HasManyGetAssociationsMixin<video>;
  setVideos!: Sequelize.HasManySetAssociationsMixin<video, videoId>;
  addVideo!: Sequelize.HasManyAddAssociationMixin<video, videoId>;
  addVideos!: Sequelize.HasManyAddAssociationsMixin<video, videoId>;
  createVideo!: Sequelize.HasManyCreateAssociationMixin<video>;
  removeVideo!: Sequelize.HasManyRemoveAssociationMixin<video, videoId>;
  removeVideos!: Sequelize.HasManyRemoveAssociationsMixin<video, videoId>;
  hasVideo!: Sequelize.HasManyHasAssociationMixin<video, videoId>;
  hasVideos!: Sequelize.HasManyHasAssociationsMixin<video, videoId>;
  countVideos!: Sequelize.HasManyCountAssociationsMixin;
  // category belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // category belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // category belongsTo upload via avatar_id
  avatar!: upload;
  getAvatar!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setAvatar!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createAvatar!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // category belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // category belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof category {
    return category.init({
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
    },
    avatar_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    },
    cover_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'category',
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
        name: "FKohag53txblab85pis128h20ow",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK410i0g3frfhqm89vj0somws20",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK3d70c45t5wbrc59w4tnx4hixp",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKqunx30y5aem4dxiob2yseve5m",
        using: "BTREE",
        fields: [
          { name: "avatar_id" },
        ]
      },
      {
        name: "FKdj6paclialiq2dtbuhu2ygj05",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
      {
        name: "FK2y94svpmqttx80mshyny85wqr",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
  }
}
