import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { user, userId } from './user';

export interface item_licenseAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  price?: string;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  image_id?: number;
}

export type item_licensePk = "id";
export type item_licenseId = item_license[item_licensePk];
export type item_licenseOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "price" | "type" | "created_by_id" | "last_modified_by_id" | "organization_id" | "image_id";
export type item_licenseCreationAttributes = Optional<item_licenseAttributes, item_licenseOptionalAttributes>;

export class item_license extends Model<item_licenseAttributes, item_licenseCreationAttributes> implements item_licenseAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  price?: string;
  type?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  image_id?: number;

  // item_license belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // item_license belongsTo image via image_id
  image!: image;
  getImage!: Sequelize.BelongsToGetAssociationMixin<image>;
  setImage!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createImage!: Sequelize.BelongsToCreateAssociationMixin<image>;
  // item_license belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // item_license belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof item_license {
    return item_license.init({
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
    price: {
      type: DataTypes.STRING(63),
      allowNull: true
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
    },
    image_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'image',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'item_license',
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
        name: "FK5ep80j7v9pg8q89kmbrb6sdvp",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKrh9ibk64x4iosvb7afcqpfh6w",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKag85inyx94fx1sw91nbu0fp8s",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKrguuxuj97skydk37csj5snclp",
        using: "BTREE",
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
  }
}
