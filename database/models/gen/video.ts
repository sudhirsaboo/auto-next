import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { category, categoryId } from './category';
import type { ent_org, ent_orgId } from './ent_org';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';
import type { video_tags, video_tagsId } from './video_tags';
import type { video_viewers, video_viewersId } from './video_viewers';

export interface videoAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  access_count: number;
  caption?: string;
  comment_status: number;
  comments_count: number;
  likes: number;
  publish_date?: Date;
  published: number;
  rating: number;
  ratings_count: number;
  duration: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  category_id?: number;
  cover_id?: number;
  user_id?: number;
}

export type videoPk = "id";
export type videoId = video[videoPk];
export type videoOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "caption" | "publish_date" | "created_by_id" | "last_modified_by_id" | "organization_id" | "category_id" | "cover_id" | "user_id";
export type videoCreationAttributes = Optional<videoAttributes, videoOptionalAttributes>;

export class video extends Model<videoAttributes, videoCreationAttributes> implements videoAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  access_count!: number;
  caption?: string;
  comment_status!: number;
  comments_count!: number;
  likes!: number;
  publish_date?: Date;
  published!: number;
  rating!: number;
  ratings_count!: number;
  duration!: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  category_id?: number;
  cover_id?: number;
  user_id?: number;

  // video belongsTo category via category_id
  category!: category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<category, categoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<category>;
  // video belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // video belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // video belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // video belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // video belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // video hasMany video_tags via video_id
  video_tags!: video_tags[];
  getVideo_tags!: Sequelize.HasManyGetAssociationsMixin<video_tags>;
  setVideo_tags!: Sequelize.HasManySetAssociationsMixin<video_tags, video_tagsId>;
  addVideo_tag!: Sequelize.HasManyAddAssociationMixin<video_tags, video_tagsId>;
  addVideo_tags!: Sequelize.HasManyAddAssociationsMixin<video_tags, video_tagsId>;
  createVideo_tag!: Sequelize.HasManyCreateAssociationMixin<video_tags>;
  removeVideo_tag!: Sequelize.HasManyRemoveAssociationMixin<video_tags, video_tagsId>;
  removeVideo_tags!: Sequelize.HasManyRemoveAssociationsMixin<video_tags, video_tagsId>;
  hasVideo_tag!: Sequelize.HasManyHasAssociationMixin<video_tags, video_tagsId>;
  hasVideo_tags!: Sequelize.HasManyHasAssociationsMixin<video_tags, video_tagsId>;
  countVideo_tags!: Sequelize.HasManyCountAssociationsMixin;
  // video hasMany video_viewers via video_id
  video_viewers!: video_viewers[];
  getVideo_viewers!: Sequelize.HasManyGetAssociationsMixin<video_viewers>;
  setVideo_viewers!: Sequelize.HasManySetAssociationsMixin<video_viewers, video_viewersId>;
  addVideo_viewer!: Sequelize.HasManyAddAssociationMixin<video_viewers, video_viewersId>;
  addVideo_viewers!: Sequelize.HasManyAddAssociationsMixin<video_viewers, video_viewersId>;
  createVideo_viewer!: Sequelize.HasManyCreateAssociationMixin<video_viewers>;
  removeVideo_viewer!: Sequelize.HasManyRemoveAssociationMixin<video_viewers, video_viewersId>;
  removeVideo_viewers!: Sequelize.HasManyRemoveAssociationsMixin<video_viewers, video_viewersId>;
  hasVideo_viewer!: Sequelize.HasManyHasAssociationMixin<video_viewers, video_viewersId>;
  hasVideo_viewers!: Sequelize.HasManyHasAssociationsMixin<video_viewers, video_viewersId>;
  countVideo_viewers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof video {
    return video.init({
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
    access_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comment_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comments_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    likes: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    publish_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    published: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ratings_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    duration: {
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
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'category',
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'video',
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
        name: "FKo5vygg1ofcylj4x2r5q3lx8b1",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK70qaul57d1wyah42odcdxf6ri",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKpdyje2gi0mr5aq4qxs3u7ysjx",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKq1uengrrk45ucgcdp7kt7qc4k",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "FKp0niailuete6db082i4g9ccta",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
      {
        name: "FKlvftuhj7tfoq8kigg4lc2ps7p",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
