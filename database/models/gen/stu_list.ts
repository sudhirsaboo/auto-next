import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface stu_listAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  category?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  album_id?: number;
}

export type stu_listPk = "id";
export type stu_listId = stu_list[stu_listPk];
export type stu_listOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "category" | "created_by_id" | "last_modified_by_id" | "organization_id" | "album_id";
export type stu_listCreationAttributes = Optional<stu_listAttributes, stu_listOptionalAttributes>;

export class stu_list extends Model<stu_listAttributes, stu_listCreationAttributes> implements stu_listAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  category?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  album_id?: number;

  // stu_list belongsTo album via album_id
  album!: album;
  getAlbum!: Sequelize.BelongsToGetAssociationMixin<album>;
  setAlbum!: Sequelize.BelongsToSetAssociationMixin<album, albumId>;
  createAlbum!: Sequelize.BelongsToCreateAssociationMixin<album>;
  // stu_list belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // stu_list belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // stu_list belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stu_list {
    return stu_list.init({
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
    category: {
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
    album_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'album',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'stu_list',
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
        name: "FKnrd01g2br5up4jvmfre51fe0q",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKdncebjm6unhjq8xtsgns86728",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK2v05w4vkcf5alxdc01qcchndi",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKnv3xl9gc24h4rs0jub2qi69kk",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
    ]
  });
  }
}
