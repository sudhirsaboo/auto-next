import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { user, userId } from './user';

export interface typeAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type typePk = "id";
export type typeId = type[typePk];
export type typeOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "type" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type typeCreationAttributes = Optional<typeAttributes, typeOptionalAttributes>;

export class type extends Model<typeAttributes, typeCreationAttributes> implements typeAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // type belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // type hasMany image via affiliation_level_id
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
  // type hasMany image via affiliation_type_id
  affiliation_type_images!: image[];
  getAffiliation_type_images!: Sequelize.HasManyGetAssociationsMixin<image>;
  setAffiliation_type_images!: Sequelize.HasManySetAssociationsMixin<image, imageId>;
  addAffiliation_type_image!: Sequelize.HasManyAddAssociationMixin<image, imageId>;
  addAffiliation_type_images!: Sequelize.HasManyAddAssociationsMixin<image, imageId>;
  createAffiliation_type_image!: Sequelize.HasManyCreateAssociationMixin<image>;
  removeAffiliation_type_image!: Sequelize.HasManyRemoveAssociationMixin<image, imageId>;
  removeAffiliation_type_images!: Sequelize.HasManyRemoveAssociationsMixin<image, imageId>;
  hasAffiliation_type_image!: Sequelize.HasManyHasAssociationMixin<image, imageId>;
  hasAffiliation_type_images!: Sequelize.HasManyHasAssociationsMixin<image, imageId>;
  countAffiliation_type_images!: Sequelize.HasManyCountAssociationsMixin;
  // type belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // type belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof type {
    return type.init({
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
    type: {
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
    tableName: 'type',
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
        name: "FKgrdravb9yvtbfnfku2fvqcr5t",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKk6mtdmri92qp2gmon5tt74bku",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKc248gib648h7u7buvrg94p9sh",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
