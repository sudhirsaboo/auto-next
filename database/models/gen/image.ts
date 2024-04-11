import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { album_images, album_imagesId } from './album_images';
import type { category, categoryId } from './category';
import type { ent_org, ent_orgId } from './ent_org';
import type { image_comment, image_commentId } from './image_comment';
import type { image_feedback, image_feedbackId } from './image_feedback';
import type { image_likers, image_likersId } from './image_likers';
import type { image_rating, image_ratingId } from './image_rating';
import type { image_tags, image_tagsId } from './image_tags';
import type { image_viewers, image_viewersId } from './image_viewers';
import type { item_license, item_licenseId } from './item_license';
import type { type, typeId } from './type';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';

export interface imageAttributes {
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
  affiliation_name?: string;
  for_sale?: boolean;
  for_sale_date?: Date;
  licence_adapt?: boolean;
  licence_com_use?: boolean;
  licence_share_alike?: boolean;
  licence_type?: string;
  medium?: string;
  privacy?: boolean;
  reference_number?: string;
  sales_count: number;
  size?: string;
  water_mark?: boolean;
  year?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  category_id?: number;
  cover_id?: number;
  user_id?: number;
  affiliation_level_id?: number;
  affiliation_type_id?: number;
}

export type imagePk = "id";
export type imageId = image[imagePk];
export type imageOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "caption" | "publish_date" | "affiliation_name" | "for_sale" | "for_sale_date" | "licence_adapt" | "licence_com_use" | "licence_share_alike" | "licence_type" | "medium" | "privacy" | "reference_number" | "size" | "water_mark" | "year" | "created_by_id" | "last_modified_by_id" | "organization_id" | "category_id" | "cover_id" | "user_id" | "affiliation_level_id" | "affiliation_type_id";
export type imageCreationAttributes = Optional<imageAttributes, imageOptionalAttributes>;

export class image extends Model<imageAttributes, imageCreationAttributes> implements imageAttributes {
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
  affiliation_name?: string;
  for_sale?: boolean;
  for_sale_date?: Date;
  licence_adapt?: boolean;
  licence_com_use?: boolean;
  licence_share_alike?: boolean;
  licence_type?: string;
  medium?: string;
  privacy?: boolean;
  reference_number?: string;
  sales_count!: number;
  size?: string;
  water_mark?: boolean;
  year?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  category_id?: number;
  cover_id?: number;
  user_id?: number;
  affiliation_level_id?: number;
  affiliation_type_id?: number;

  // image belongsTo category via category_id
  category!: category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<category, categoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<category>;
  // image belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // image belongsToMany album via image_id and album_id
  album_id_albums!: album[];
  getAlbum_id_albums!: Sequelize.BelongsToManyGetAssociationsMixin<album>;
  setAlbum_id_albums!: Sequelize.BelongsToManySetAssociationsMixin<album, albumId>;
  addAlbum_id_album!: Sequelize.BelongsToManyAddAssociationMixin<album, albumId>;
  addAlbum_id_albums!: Sequelize.BelongsToManyAddAssociationsMixin<album, albumId>;
  createAlbum_id_album!: Sequelize.BelongsToManyCreateAssociationMixin<album>;
  removeAlbum_id_album!: Sequelize.BelongsToManyRemoveAssociationMixin<album, albumId>;
  removeAlbum_id_albums!: Sequelize.BelongsToManyRemoveAssociationsMixin<album, albumId>;
  hasAlbum_id_album!: Sequelize.BelongsToManyHasAssociationMixin<album, albumId>;
  hasAlbum_id_albums!: Sequelize.BelongsToManyHasAssociationsMixin<album, albumId>;
  countAlbum_id_albums!: Sequelize.BelongsToManyCountAssociationsMixin;
  // image hasMany album_images via image_id
  album_images!: album_images[];
  getAlbum_images!: Sequelize.HasManyGetAssociationsMixin<album_images>;
  setAlbum_images!: Sequelize.HasManySetAssociationsMixin<album_images, album_imagesId>;
  addAlbum_image!: Sequelize.HasManyAddAssociationMixin<album_images, album_imagesId>;
  addAlbum_images!: Sequelize.HasManyAddAssociationsMixin<album_images, album_imagesId>;
  createAlbum_image!: Sequelize.HasManyCreateAssociationMixin<album_images>;
  removeAlbum_image!: Sequelize.HasManyRemoveAssociationMixin<album_images, album_imagesId>;
  removeAlbum_images!: Sequelize.HasManyRemoveAssociationsMixin<album_images, album_imagesId>;
  hasAlbum_image!: Sequelize.HasManyHasAssociationMixin<album_images, album_imagesId>;
  hasAlbum_images!: Sequelize.HasManyHasAssociationsMixin<album_images, album_imagesId>;
  countAlbum_images!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany image_comment via commentable_id
  image_comments!: image_comment[];
  getImage_comments!: Sequelize.HasManyGetAssociationsMixin<image_comment>;
  setImage_comments!: Sequelize.HasManySetAssociationsMixin<image_comment, image_commentId>;
  addImage_comment!: Sequelize.HasManyAddAssociationMixin<image_comment, image_commentId>;
  addImage_comments!: Sequelize.HasManyAddAssociationsMixin<image_comment, image_commentId>;
  createImage_comment!: Sequelize.HasManyCreateAssociationMixin<image_comment>;
  removeImage_comment!: Sequelize.HasManyRemoveAssociationMixin<image_comment, image_commentId>;
  removeImage_comments!: Sequelize.HasManyRemoveAssociationsMixin<image_comment, image_commentId>;
  hasImage_comment!: Sequelize.HasManyHasAssociationMixin<image_comment, image_commentId>;
  hasImage_comments!: Sequelize.HasManyHasAssociationsMixin<image_comment, image_commentId>;
  countImage_comments!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany image_feedback via entity_id
  image_feedbacks!: image_feedback[];
  getImage_feedbacks!: Sequelize.HasManyGetAssociationsMixin<image_feedback>;
  setImage_feedbacks!: Sequelize.HasManySetAssociationsMixin<image_feedback, image_feedbackId>;
  addImage_feedback!: Sequelize.HasManyAddAssociationMixin<image_feedback, image_feedbackId>;
  addImage_feedbacks!: Sequelize.HasManyAddAssociationsMixin<image_feedback, image_feedbackId>;
  createImage_feedback!: Sequelize.HasManyCreateAssociationMixin<image_feedback>;
  removeImage_feedback!: Sequelize.HasManyRemoveAssociationMixin<image_feedback, image_feedbackId>;
  removeImage_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<image_feedback, image_feedbackId>;
  hasImage_feedback!: Sequelize.HasManyHasAssociationMixin<image_feedback, image_feedbackId>;
  hasImage_feedbacks!: Sequelize.HasManyHasAssociationsMixin<image_feedback, image_feedbackId>;
  countImage_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany image_likers via image_id
  image_likers!: image_likers[];
  getImage_likers!: Sequelize.HasManyGetAssociationsMixin<image_likers>;
  setImage_likers!: Sequelize.HasManySetAssociationsMixin<image_likers, image_likersId>;
  addImage_liker!: Sequelize.HasManyAddAssociationMixin<image_likers, image_likersId>;
  addImage_likers!: Sequelize.HasManyAddAssociationsMixin<image_likers, image_likersId>;
  createImage_liker!: Sequelize.HasManyCreateAssociationMixin<image_likers>;
  removeImage_liker!: Sequelize.HasManyRemoveAssociationMixin<image_likers, image_likersId>;
  removeImage_likers!: Sequelize.HasManyRemoveAssociationsMixin<image_likers, image_likersId>;
  hasImage_liker!: Sequelize.HasManyHasAssociationMixin<image_likers, image_likersId>;
  hasImage_likers!: Sequelize.HasManyHasAssociationsMixin<image_likers, image_likersId>;
  countImage_likers!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany image_rating via entity_id
  image_ratings!: image_rating[];
  getImage_ratings!: Sequelize.HasManyGetAssociationsMixin<image_rating>;
  setImage_ratings!: Sequelize.HasManySetAssociationsMixin<image_rating, image_ratingId>;
  addImage_rating!: Sequelize.HasManyAddAssociationMixin<image_rating, image_ratingId>;
  addImage_ratings!: Sequelize.HasManyAddAssociationsMixin<image_rating, image_ratingId>;
  createImage_rating!: Sequelize.HasManyCreateAssociationMixin<image_rating>;
  removeImage_rating!: Sequelize.HasManyRemoveAssociationMixin<image_rating, image_ratingId>;
  removeImage_ratings!: Sequelize.HasManyRemoveAssociationsMixin<image_rating, image_ratingId>;
  hasImage_rating!: Sequelize.HasManyHasAssociationMixin<image_rating, image_ratingId>;
  hasImage_ratings!: Sequelize.HasManyHasAssociationsMixin<image_rating, image_ratingId>;
  countImage_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany image_tags via image_id
  image_tags!: image_tags[];
  getImage_tags!: Sequelize.HasManyGetAssociationsMixin<image_tags>;
  setImage_tags!: Sequelize.HasManySetAssociationsMixin<image_tags, image_tagsId>;
  addImage_tag!: Sequelize.HasManyAddAssociationMixin<image_tags, image_tagsId>;
  addImage_tags!: Sequelize.HasManyAddAssociationsMixin<image_tags, image_tagsId>;
  createImage_tag!: Sequelize.HasManyCreateAssociationMixin<image_tags>;
  removeImage_tag!: Sequelize.HasManyRemoveAssociationMixin<image_tags, image_tagsId>;
  removeImage_tags!: Sequelize.HasManyRemoveAssociationsMixin<image_tags, image_tagsId>;
  hasImage_tag!: Sequelize.HasManyHasAssociationMixin<image_tags, image_tagsId>;
  hasImage_tags!: Sequelize.HasManyHasAssociationsMixin<image_tags, image_tagsId>;
  countImage_tags!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany image_viewers via image_id
  image_viewers!: image_viewers[];
  getImage_viewers!: Sequelize.HasManyGetAssociationsMixin<image_viewers>;
  setImage_viewers!: Sequelize.HasManySetAssociationsMixin<image_viewers, image_viewersId>;
  addImage_viewer!: Sequelize.HasManyAddAssociationMixin<image_viewers, image_viewersId>;
  addImage_viewers!: Sequelize.HasManyAddAssociationsMixin<image_viewers, image_viewersId>;
  createImage_viewer!: Sequelize.HasManyCreateAssociationMixin<image_viewers>;
  removeImage_viewer!: Sequelize.HasManyRemoveAssociationMixin<image_viewers, image_viewersId>;
  removeImage_viewers!: Sequelize.HasManyRemoveAssociationsMixin<image_viewers, image_viewersId>;
  hasImage_viewer!: Sequelize.HasManyHasAssociationMixin<image_viewers, image_viewersId>;
  hasImage_viewers!: Sequelize.HasManyHasAssociationsMixin<image_viewers, image_viewersId>;
  countImage_viewers!: Sequelize.HasManyCountAssociationsMixin;
  // image hasMany item_license via image_id
  item_licenses!: item_license[];
  getItem_licenses!: Sequelize.HasManyGetAssociationsMixin<item_license>;
  setItem_licenses!: Sequelize.HasManySetAssociationsMixin<item_license, item_licenseId>;
  addItem_license!: Sequelize.HasManyAddAssociationMixin<item_license, item_licenseId>;
  addItem_licenses!: Sequelize.HasManyAddAssociationsMixin<item_license, item_licenseId>;
  createItem_license!: Sequelize.HasManyCreateAssociationMixin<item_license>;
  removeItem_license!: Sequelize.HasManyRemoveAssociationMixin<item_license, item_licenseId>;
  removeItem_licenses!: Sequelize.HasManyRemoveAssociationsMixin<item_license, item_licenseId>;
  hasItem_license!: Sequelize.HasManyHasAssociationMixin<item_license, item_licenseId>;
  hasItem_licenses!: Sequelize.HasManyHasAssociationsMixin<item_license, item_licenseId>;
  countItem_licenses!: Sequelize.HasManyCountAssociationsMixin;
  // image belongsToMany user via image_id and user_id
  user_id_users!: user[];
  getUser_id_users!: Sequelize.BelongsToManyGetAssociationsMixin<user>;
  setUser_id_users!: Sequelize.BelongsToManySetAssociationsMixin<user, userId>;
  addUser_id_user!: Sequelize.BelongsToManyAddAssociationMixin<user, userId>;
  addUser_id_users!: Sequelize.BelongsToManyAddAssociationsMixin<user, userId>;
  createUser_id_user!: Sequelize.BelongsToManyCreateAssociationMixin<user>;
  removeUser_id_user!: Sequelize.BelongsToManyRemoveAssociationMixin<user, userId>;
  removeUser_id_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<user, userId>;
  hasUser_id_user!: Sequelize.BelongsToManyHasAssociationMixin<user, userId>;
  hasUser_id_users!: Sequelize.BelongsToManyHasAssociationsMixin<user, userId>;
  countUser_id_users!: Sequelize.BelongsToManyCountAssociationsMixin;
  // image belongsTo type via affiliation_level_id
  affiliation_level!: type;
  getAffiliation_level!: Sequelize.BelongsToGetAssociationMixin<type>;
  setAffiliation_level!: Sequelize.BelongsToSetAssociationMixin<type, typeId>;
  createAffiliation_level!: Sequelize.BelongsToCreateAssociationMixin<type>;
  // image belongsTo type via affiliation_type_id
  affiliation_type!: type;
  getAffiliation_type!: Sequelize.BelongsToGetAssociationMixin<type>;
  setAffiliation_type!: Sequelize.BelongsToSetAssociationMixin<type, typeId>;
  createAffiliation_type!: Sequelize.BelongsToCreateAssociationMixin<type>;
  // image belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // image belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image {
    return image.init({
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
    affiliation_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    for_sale: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    for_sale_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    licence_adapt: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    licence_com_use: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    licence_share_alike: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    licence_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    medium: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    privacy: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reference_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sales_count: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    water_mark: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    },
    affiliation_level_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'type',
        key: 'id'
      }
    },
    affiliation_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'type',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'image',
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
        name: "FKglm2wjmfhv4vp7igiwu26upad",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKlouyjnowkyc6a6oirpvt16rf2",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKk2xu5jgewayau74njsa4kq0dc",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKevbwltgurtl0fcgifrlbojf66",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "FKqyuhr4qb0h3a1pafm48y6fco6",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
      {
        name: "FKlxnnh0ir05khn8iu9tgwh1yyk",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKddy34u97lin6c2fb3hcxbdcrs",
        using: "BTREE",
        fields: [
          { name: "affiliation_level_id" },
        ]
      },
      {
        name: "FKjjifk2tjj8lhnknp0ox1l0f28",
        using: "BTREE",
        fields: [
          { name: "affiliation_type_id" },
        ]
      },
    ]
  });
  }
}
