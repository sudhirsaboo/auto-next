import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { image, imageId } from './image';
import type { user, userId } from './user';

export interface image_commentAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  text?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;
  commentable_id: number;
}

export type image_commentPk = "id";
export type image_commentId = image_comment[image_commentPk];
export type image_commentOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "text" | "created_by_id" | "last_modified_by_id" | "organization_id" | "user_id";
export type image_commentCreationAttributes = Optional<image_commentAttributes, image_commentOptionalAttributes>;

export class image_comment extends Model<image_commentAttributes, image_commentCreationAttributes> implements image_commentAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  text?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  user_id?: number;
  commentable_id!: number;

  // image_comment belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // image_comment belongsTo image via commentable_id
  commentable!: image;
  getCommentable!: Sequelize.BelongsToGetAssociationMixin<image>;
  setCommentable!: Sequelize.BelongsToSetAssociationMixin<image, imageId>;
  createCommentable!: Sequelize.BelongsToCreateAssociationMixin<image>;
  // image_comment belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image_comment belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // image_comment belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof image_comment {
    return image_comment.init({
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
    text: {
      type: DataTypes.TEXT,
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
    commentable_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'image',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'image_comment',
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
        name: "FK8frts3xjuh7s0ba4pyk84gw47",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKak8ynkbws7r2mndssfcrmsc66",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKsltnkxulretjfprhixjau6p9g",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK2t0n2t0ebvelkbrxe8as4q67t",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKdqbdq43q1v624y0idg7anslnr",
        using: "BTREE",
        fields: [
          { name: "commentable_id" },
        ]
      },
    ]
  });
  }
}
