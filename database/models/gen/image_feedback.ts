import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { user, userId } from './user';

export interface image_feedbackAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  answer?: string;
  question?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;
  entity_id: number;
}

export type image_feedbackPk = "id";
export type image_feedbackId = image_feedback[image_feedbackPk];
export type image_feedbackOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "answer" | "question" | "created_by_id" | "last_modified_by_id" | "organization_id" | "user_id";
export type image_feedbackCreationAttributes = Optional<image_feedbackAttributes, image_feedbackOptionalAttributes>;

export class image_feedback extends Model<image_feedbackAttributes, image_feedbackCreationAttributes> implements image_feedbackAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  answer?: string;
  question?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;
  entity_id!: number;

  // image_feedback belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // image_feedback belongsTo image via entity_id
  entity!: image;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<image>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<image>;
  // image_feedback belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image_feedback belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image_feedback belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_feedback {
    return image_feedback.init({
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
    answer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    question: {
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
      allowNull: true,
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
    tableName: 'image_feedback',
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
        name: "FKfe2bsg0fhhulpd9n2lmgvyaje",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKm2h2f40kofgkcanvacd7uo21r",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK4oevp7ycvm0ekla43xodf20j7",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKc945fis4px5xx3ux4efbsmhkn",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK65afw4u6j1pqmo4pfksqh0tle",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
