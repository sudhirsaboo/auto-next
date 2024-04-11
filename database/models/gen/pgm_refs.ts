import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { user, userId } from './user';

export interface pgm_refsAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  program_submission_id?: number;
}

export type pgm_refsPk = "id";
export type pgm_refsId = pgm_refs[pgm_refsPk];
export type pgm_refsOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "program_submission_id";
export type pgm_refsCreationAttributes = Optional<pgm_refsAttributes, pgm_refsOptionalAttributes>;

export class pgm_refs extends Model<pgm_refsAttributes, pgm_refsCreationAttributes> implements pgm_refsAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  program_submission_id?: number;

  // pgm_refs belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // pgm_refs belongsTo pgm_submission via program_submission_id
  program_submission!: pgm_submission;
  getProgram_submission!: Sequelize.BelongsToGetAssociationMixin<pgm_submission>;
  setProgram_submission!: Sequelize.BelongsToSetAssociationMixin<pgm_submission, pgm_submissionId>;
  createProgram_submission!: Sequelize.BelongsToCreateAssociationMixin<pgm_submission>;
  // pgm_refs belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_refs belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pgm_refs {
    return pgm_refs.init({
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
    program_submission_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pgm_submission',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pgm_refs',
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
        name: "FK57fvhfykp71kvf5ua1qtokssq",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKg213j3iy08rqp4g1hd6k7ngn5",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK6gg3pbxvoxy5o6rfuvjrbfgwq",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FK9i3jpqelh9lxihhi4oycvygpm",
        using: "BTREE",
        fields: [
          { name: "program_submission_id" },
        ]
      },
    ]
  });
  }
}
