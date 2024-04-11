import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album_feedback, album_feedbackId } from './album_feedback';
import type { album_images, album_imagesId } from './album_images';
import type { album_rating, album_ratingId } from './album_rating';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { stu_list, stu_listId } from './stu_list';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';

export interface albumAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  no_of_ratings?: number;
  publish_date?: Date;
  published: number;
  total_rating?: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  cover_id?: number;
}

export type albumPk = "id";
export type albumId = album[albumPk];
export type albumOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "no_of_ratings" | "publish_date" | "total_rating" | "created_by_id" | "last_modified_by_id" | "organization_id" | "cover_id";
export type albumCreationAttributes = Optional<albumAttributes, albumOptionalAttributes>;

export class album extends Model<albumAttributes, albumCreationAttributes> implements albumAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  no_of_ratings?: number;
  publish_date?: Date;
  published!: number;
  total_rating?: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  cover_id?: number;

  // album hasMany album_feedback via entity_id
  album_feedbacks!: album_feedback[];
  getAlbum_feedbacks!: Sequelize.HasManyGetAssociationsMixin<album_feedback>;
  setAlbum_feedbacks!: Sequelize.HasManySetAssociationsMixin<album_feedback, album_feedbackId>;
  addAlbum_feedback!: Sequelize.HasManyAddAssociationMixin<album_feedback, album_feedbackId>;
  addAlbum_feedbacks!: Sequelize.HasManyAddAssociationsMixin<album_feedback, album_feedbackId>;
  createAlbum_feedback!: Sequelize.HasManyCreateAssociationMixin<album_feedback>;
  removeAlbum_feedback!: Sequelize.HasManyRemoveAssociationMixin<album_feedback, album_feedbackId>;
  removeAlbum_feedbacks!: Sequelize.HasManyRemoveAssociationsMixin<album_feedback, album_feedbackId>;
  hasAlbum_feedback!: Sequelize.HasManyHasAssociationMixin<album_feedback, album_feedbackId>;
  hasAlbum_feedbacks!: Sequelize.HasManyHasAssociationsMixin<album_feedback, album_feedbackId>;
  countAlbum_feedbacks!: Sequelize.HasManyCountAssociationsMixin;
  // album hasMany album_images via album_id
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
  // album hasMany album_rating via entity_id
  album_ratings!: album_rating[];
  getAlbum_ratings!: Sequelize.HasManyGetAssociationsMixin<album_rating>;
  setAlbum_ratings!: Sequelize.HasManySetAssociationsMixin<album_rating, album_ratingId>;
  addAlbum_rating!: Sequelize.HasManyAddAssociationMixin<album_rating, album_ratingId>;
  addAlbum_ratings!: Sequelize.HasManyAddAssociationsMixin<album_rating, album_ratingId>;
  createAlbum_rating!: Sequelize.HasManyCreateAssociationMixin<album_rating>;
  removeAlbum_rating!: Sequelize.HasManyRemoveAssociationMixin<album_rating, album_ratingId>;
  removeAlbum_ratings!: Sequelize.HasManyRemoveAssociationsMixin<album_rating, album_ratingId>;
  hasAlbum_rating!: Sequelize.HasManyHasAssociationMixin<album_rating, album_ratingId>;
  hasAlbum_ratings!: Sequelize.HasManyHasAssociationsMixin<album_rating, album_ratingId>;
  countAlbum_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // album belongsToMany image via album_id and image_id
  image_id_images!: image[];
  getImage_id_images!: Sequelize.BelongsToManyGetAssociationsMixin<image>;
  setImage_id_images!: Sequelize.BelongsToManySetAssociationsMixin<image, imageId>;
  addImage_id_image!: Sequelize.BelongsToManyAddAssociationMixin<image, imageId>;
  addImage_id_images!: Sequelize.BelongsToManyAddAssociationsMixin<image, imageId>;
  createImage_id_image!: Sequelize.BelongsToManyCreateAssociationMixin<image>;
  removeImage_id_image!: Sequelize.BelongsToManyRemoveAssociationMixin<image, imageId>;
  removeImage_id_images!: Sequelize.BelongsToManyRemoveAssociationsMixin<image, imageId>;
  hasImage_id_image!: Sequelize.BelongsToManyHasAssociationMixin<image, imageId>;
  hasImage_id_images!: Sequelize.BelongsToManyHasAssociationsMixin<image, imageId>;
  countImage_id_images!: Sequelize.BelongsToManyCountAssociationsMixin;
  // album hasMany pgm_submission via album_id
  pgm_submissions!: pgm_submission[];
  getPgm_submissions!: Sequelize.HasManyGetAssociationsMixin<pgm_submission>;
  setPgm_submissions!: Sequelize.HasManySetAssociationsMixin<pgm_submission, pgm_submissionId>;
  addPgm_submission!: Sequelize.HasManyAddAssociationMixin<pgm_submission, pgm_submissionId>;
  addPgm_submissions!: Sequelize.HasManyAddAssociationsMixin<pgm_submission, pgm_submissionId>;
  createPgm_submission!: Sequelize.HasManyCreateAssociationMixin<pgm_submission>;
  removePgm_submission!: Sequelize.HasManyRemoveAssociationMixin<pgm_submission, pgm_submissionId>;
  removePgm_submissions!: Sequelize.HasManyRemoveAssociationsMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submission!: Sequelize.HasManyHasAssociationMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submissions!: Sequelize.HasManyHasAssociationsMixin<pgm_submission, pgm_submissionId>;
  countPgm_submissions!: Sequelize.HasManyCountAssociationsMixin;
  // album hasMany stu_list via album_id
  stu_lists!: stu_list[];
  getStu_lists!: Sequelize.HasManyGetAssociationsMixin<stu_list>;
  setStu_lists!: Sequelize.HasManySetAssociationsMixin<stu_list, stu_listId>;
  addStu_list!: Sequelize.HasManyAddAssociationMixin<stu_list, stu_listId>;
  addStu_lists!: Sequelize.HasManyAddAssociationsMixin<stu_list, stu_listId>;
  createStu_list!: Sequelize.HasManyCreateAssociationMixin<stu_list>;
  removeStu_list!: Sequelize.HasManyRemoveAssociationMixin<stu_list, stu_listId>;
  removeStu_lists!: Sequelize.HasManyRemoveAssociationsMixin<stu_list, stu_listId>;
  hasStu_list!: Sequelize.HasManyHasAssociationMixin<stu_list, stu_listId>;
  hasStu_lists!: Sequelize.HasManyHasAssociationsMixin<stu_list, stu_listId>;
  countStu_lists!: Sequelize.HasManyCountAssociationsMixin;
  // album belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // album belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // album belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // album belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof album {
    return album.init({
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
    no_of_ratings: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    publish_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    published: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_rating: {
      type: DataTypes.BIGINT,
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
    cover_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'album',
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
        name: "FKsfjt97ru78ycuhms12qirlpvp",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKadkdiv3f0b31nl0i8dchstdbb",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKf8acj3avmcee6omow7h4onot9",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKj3w300p97nivc2qyaa0ydkkrf",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
    ]
  });
  }
}
