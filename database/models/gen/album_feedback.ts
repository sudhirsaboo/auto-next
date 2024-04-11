import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface album_feedbackAttributes {
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
  entity_id: number;
  user_id: number;
}

export type album_feedbackPk = "id";
export type album_feedbackId = album_feedback[album_feedbackPk];
export type album_feedbackOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "answer" | "question" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type album_feedbackCreationAttributes = Optional<album_feedbackAttributes, album_feedbackOptionalAttributes>;

export class album_feedback extends Model<album_feedbackAttributes, album_feedbackCreationAttributes> implements album_feedbackAttributes {
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
  entity_id!: number;
  user_id!: number;

  // album_feedback belongsTo album via entity_id
  entity!: album;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<album>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<album, albumId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<album>;
  // album_feedback belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // album_feedback belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // album_feedback belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // album_feedback belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof album_feedback {
    return album_feedback.init({
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
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'album',
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
    }
  }, {
    sequelize,
    tableName: 'album_feedback',
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
        name: "UK1w0blqyt11fnqmg2fbc8q7cgl",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "question" },
          { name: "user_id" },
          { name: "entity_id" },
        ]
      },
      {
        name: "FKe7n0t9pujtb5cwxb5d7iqqu0",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKckv113dpy2m9cj0mlm1x9ju7p",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKj9l1os5oefrsv1cw0taaqfch7",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKnf0vkfu2be4njem14n3yvburh",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "FKha33bx605oaur22rdumn391je",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
