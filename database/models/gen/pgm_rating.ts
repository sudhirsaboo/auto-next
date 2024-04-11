import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { user, userId } from './user';

export interface pgm_ratingAttributes {
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
  entity_id: number;
  user_id: number;
}

export type pgm_ratingPk = "id";
export type pgm_ratingId = pgm_rating[pgm_ratingPk];
export type pgm_ratingOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "criteria" | "rating" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type pgm_ratingCreationAttributes = Optional<pgm_ratingAttributes, pgm_ratingOptionalAttributes>;

export class pgm_rating extends Model<pgm_ratingAttributes, pgm_ratingCreationAttributes> implements pgm_ratingAttributes {
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
  entity_id!: number;
  user_id!: number;

  // pgm_rating belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // pgm_rating belongsTo pgm_submission via entity_id
  entity!: pgm_submission;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<pgm_submission>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<pgm_submission, pgm_submissionId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<pgm_submission>;
  // pgm_rating belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_rating belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_rating belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pgm_rating {
    return pgm_rating.init({
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
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'pgm_submission',
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
    tableName: 'pgm_rating',
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
        name: "UKp8gldkui8jyvjyjlio8q4ckgs",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "criteria" },
          { name: "user_id" },
          { name: "entity_id" },
        ]
      },
      {
        name: "FKkgj53a4av5i1kgrryyp14uc12",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKebb8kb3bp06wwc9ye4fm9m4pp",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK53av3ij9gw9q139j7arhk10cr",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKak3bfses99w51grwurpnian6t",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "FKg2gmk8um9s0ovs6b38uj1g75h",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
