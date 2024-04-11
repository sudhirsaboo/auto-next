import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { category, categoryId } from './category';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { evt_schedule, evt_scheduleId } from './evt_schedule';
import type { image, imageId } from './image';
import type { user, userId } from './user';
import type { video, videoId } from './video';

export interface uploadAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  aws_url?: string;
  content_type?: string;
  ext?: string;
  path?: string;
  src_path?: string;
  target_dir?: string;
  type?: string;
  url?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type uploadPk = "id";
export type uploadId = upload[uploadPk];
export type uploadOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "aws_url" | "content_type" | "ext" | "path" | "src_path" | "target_dir" | "type" | "url" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type uploadCreationAttributes = Optional<uploadAttributes, uploadOptionalAttributes>;

export class upload extends Model<uploadAttributes, uploadCreationAttributes> implements uploadAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  aws_url?: string;
  content_type?: string;
  ext?: string;
  path?: string;
  src_path?: string;
  target_dir?: string;
  type?: string;
  url?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // upload belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // upload hasMany album via cover_id
  albums!: album[];
  getAlbums!: Sequelize.HasManyGetAssociationsMixin<album>;
  setAlbums!: Sequelize.HasManySetAssociationsMixin<album, albumId>;
  addAlbum!: Sequelize.HasManyAddAssociationMixin<album, albumId>;
  addAlbums!: Sequelize.HasManyAddAssociationsMixin<album, albumId>;
  createAlbum!: Sequelize.HasManyCreateAssociationMixin<album>;
  removeAlbum!: Sequelize.HasManyRemoveAssociationMixin<album, albumId>;
  removeAlbums!: Sequelize.HasManyRemoveAssociationsMixin<album, albumId>;
  hasAlbum!: Sequelize.HasManyHasAssociationMixin<album, albumId>;
  hasAlbums!: Sequelize.HasManyHasAssociationsMixin<album, albumId>;
  countAlbums!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany category via cover_id
  categories!: category[];
  getCategories!: Sequelize.HasManyGetAssociationsMixin<category>;
  setCategories!: Sequelize.HasManySetAssociationsMixin<category, categoryId>;
  addCategory!: Sequelize.HasManyAddAssociationMixin<category, categoryId>;
  addCategories!: Sequelize.HasManyAddAssociationsMixin<category, categoryId>;
  createCategory!: Sequelize.HasManyCreateAssociationMixin<category>;
  removeCategory!: Sequelize.HasManyRemoveAssociationMixin<category, categoryId>;
  removeCategories!: Sequelize.HasManyRemoveAssociationsMixin<category, categoryId>;
  hasCategory!: Sequelize.HasManyHasAssociationMixin<category, categoryId>;
  hasCategories!: Sequelize.HasManyHasAssociationsMixin<category, categoryId>;
  countCategories!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany category via avatar_id
  avatar_categories!: category[];
  getAvatar_categories!: Sequelize.HasManyGetAssociationsMixin<category>;
  setAvatar_categories!: Sequelize.HasManySetAssociationsMixin<category, categoryId>;
  addAvatar_category!: Sequelize.HasManyAddAssociationMixin<category, categoryId>;
  addAvatar_categories!: Sequelize.HasManyAddAssociationsMixin<category, categoryId>;
  createAvatar_category!: Sequelize.HasManyCreateAssociationMixin<category>;
  removeAvatar_category!: Sequelize.HasManyRemoveAssociationMixin<category, categoryId>;
  removeAvatar_categories!: Sequelize.HasManyRemoveAssociationsMixin<category, categoryId>;
  hasAvatar_category!: Sequelize.HasManyHasAssociationMixin<category, categoryId>;
  hasAvatar_categories!: Sequelize.HasManyHasAssociationsMixin<category, categoryId>;
  countAvatar_categories!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany ent_org via cover_id
  ent_orgs!: ent_org[];
  getEnt_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setEnt_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addEnt_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addEnt_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createEnt_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeEnt_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeEnt_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasEnt_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasEnt_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countEnt_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany ent_org via avatar_id
  avatar_ent_orgs!: ent_org[];
  getAvatar_ent_orgs!: Sequelize.HasManyGetAssociationsMixin<ent_org>;
  setAvatar_ent_orgs!: Sequelize.HasManySetAssociationsMixin<ent_org, ent_orgId>;
  addAvatar_ent_org!: Sequelize.HasManyAddAssociationMixin<ent_org, ent_orgId>;
  addAvatar_ent_orgs!: Sequelize.HasManyAddAssociationsMixin<ent_org, ent_orgId>;
  createAvatar_ent_org!: Sequelize.HasManyCreateAssociationMixin<ent_org>;
  removeAvatar_ent_org!: Sequelize.HasManyRemoveAssociationMixin<ent_org, ent_orgId>;
  removeAvatar_ent_orgs!: Sequelize.HasManyRemoveAssociationsMixin<ent_org, ent_orgId>;
  hasAvatar_ent_org!: Sequelize.HasManyHasAssociationMixin<ent_org, ent_orgId>;
  hasAvatar_ent_orgs!: Sequelize.HasManyHasAssociationsMixin<ent_org, ent_orgId>;
  countAvatar_ent_orgs!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany evt_program via logo_id
  evt_programs!: evt_program[];
  getEvt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setEvt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addEvt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addEvt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createEvt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeEvt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeEvt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasEvt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasEvt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countEvt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany evt_program via cover_id
  cover_evt_programs!: evt_program[];
  getCover_evt_programs!: Sequelize.HasManyGetAssociationsMixin<evt_program>;
  setCover_evt_programs!: Sequelize.HasManySetAssociationsMixin<evt_program, evt_programId>;
  addCover_evt_program!: Sequelize.HasManyAddAssociationMixin<evt_program, evt_programId>;
  addCover_evt_programs!: Sequelize.HasManyAddAssociationsMixin<evt_program, evt_programId>;
  createCover_evt_program!: Sequelize.HasManyCreateAssociationMixin<evt_program>;
  removeCover_evt_program!: Sequelize.HasManyRemoveAssociationMixin<evt_program, evt_programId>;
  removeCover_evt_programs!: Sequelize.HasManyRemoveAssociationsMixin<evt_program, evt_programId>;
  hasCover_evt_program!: Sequelize.HasManyHasAssociationMixin<evt_program, evt_programId>;
  hasCover_evt_programs!: Sequelize.HasManyHasAssociationsMixin<evt_program, evt_programId>;
  countCover_evt_programs!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany evt_schedule via cover_id
  evt_schedules!: evt_schedule[];
  getEvt_schedules!: Sequelize.HasManyGetAssociationsMixin<evt_schedule>;
  setEvt_schedules!: Sequelize.HasManySetAssociationsMixin<evt_schedule, evt_scheduleId>;
  addEvt_schedule!: Sequelize.HasManyAddAssociationMixin<evt_schedule, evt_scheduleId>;
  addEvt_schedules!: Sequelize.HasManyAddAssociationsMixin<evt_schedule, evt_scheduleId>;
  createEvt_schedule!: Sequelize.HasManyCreateAssociationMixin<evt_schedule>;
  removeEvt_schedule!: Sequelize.HasManyRemoveAssociationMixin<evt_schedule, evt_scheduleId>;
  removeEvt_schedules!: Sequelize.HasManyRemoveAssociationsMixin<evt_schedule, evt_scheduleId>;
  hasEvt_schedule!: Sequelize.HasManyHasAssociationMixin<evt_schedule, evt_scheduleId>;
  hasEvt_schedules!: Sequelize.HasManyHasAssociationsMixin<evt_schedule, evt_scheduleId>;
  countEvt_schedules!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany image via cover_id
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
  // upload hasMany user via cover_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany user via avatar_id
  avatar_users!: user[];
  getAvatar_users!: Sequelize.HasManyGetAssociationsMixin<user>;
  setAvatar_users!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addAvatar_user!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addAvatar_users!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createAvatar_user!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeAvatar_user!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeAvatar_users!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasAvatar_user!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasAvatar_users!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countAvatar_users!: Sequelize.HasManyCountAssociationsMixin;
  // upload hasMany video via cover_id
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
  // upload belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // upload belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof upload {
    return upload.init({
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
    aws_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ext: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    src_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    target_dir: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
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
    }
  }, {
    sequelize,
    tableName: 'upload',
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
        name: "FKcco8wrpkbmh1x6xh3yw0hsuhm",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKorxphlvn1wv0863ue0gtfolxs",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKn36kco3ix4y67t3q3xec54hgr",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
