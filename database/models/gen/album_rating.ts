import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface album_ratingAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  consider?: string;
  content?: string;
  craftsmanship?: string;
  minus?: string;
  plus?: string;
  questions?: string;
  technical?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  entity_id: number;
  user_id: number;
}

export type album_ratingPk = "id";
export type album_ratingId = album_rating[album_ratingPk];
export type album_ratingOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "consider" | "content" | "craftsmanship" | "minus" | "plus" | "questions" | "technical" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type album_ratingCreationAttributes = Optional<album_ratingAttributes, album_ratingOptionalAttributes>;

export class album_rating extends Model<album_ratingAttributes, album_ratingCreationAttributes> implements album_ratingAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  consider?: string;
  content?: string;
  craftsmanship?: string;
  minus?: string;
  plus?: string;
  questions?: string;
  technical?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  entity_id!: number;
  user_id!: number;

  // album_rating belongsTo album via entity_id
  entity!: album;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<album>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<album, albumId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<album>;
  // album_rating belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // album_rating belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // album_rating belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // album_rating belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof album_rating {
    return album_rating.init({
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
    consider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    craftsmanship: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    minus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    plus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    questions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    technical: {
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
    tableName: 'album_rating',
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
        name: "UKipkijogoykfep7lb3ubs9tqiq",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "entity_id" },
        ]
      },
      {
        name: "FKq17gr697qkhrrgw7oex2kr8ns",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FK9hxekx965dy0h37kmllif8k02",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK4gaxctwh79yplljjf7uaen7l2",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKc1xv9kj0p7fvud13fhb3v2ohw",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
