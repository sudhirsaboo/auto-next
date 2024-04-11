import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { user, userId } from './user';

export interface image_ratingAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  criteria?: string;
  rating?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id: number;
  entity_id: number;
}

export type image_ratingPk = "id";
export type image_ratingId = image_rating[image_ratingPk];
export type image_ratingOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "criteria" | "rating" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type image_ratingCreationAttributes = Optional<image_ratingAttributes, image_ratingOptionalAttributes>;

export class image_rating extends Model<image_ratingAttributes, image_ratingCreationAttributes> implements image_ratingAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  criteria?: string;
  rating?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id!: number;
  entity_id!: number;

  // image_rating belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // image_rating belongsTo image via entity_id
  entity!: image;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<image>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<image>;
  // image_rating belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image_rating belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image_rating belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_rating {
    return image_rating.init({
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
    criteria: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rating: {
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
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'image',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'image_rating',
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
        name: "UKmrtbu5i1ve4cgh0gukkxmmi9h",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "criteria" },
          { name: "user_id" },
          { name: "entity_id" },
        ]
      },
      {
        name: "FK532bmvdqudepgn6ntp466rywp",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKnpj3rbypwj99p2bropw8tllya",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK1wfc386jypocaypt5q7qwgm5r",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKan8uf4ajhevwrqdsv7r9c1c9g",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK276mehtd1hu1rj19orupjjp85",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
