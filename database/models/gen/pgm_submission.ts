import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { album, albumId } from './album';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_program, evt_programId } from './evt_program';
import type { pgm_judge, pgm_judgeId } from './pgm_judge';
import type { pgm_quest, pgm_questId } from './pgm_quest';
import type { pgm_rating, pgm_ratingId } from './pgm_rating';
import type { pgm_refs, pgm_refsId } from './pgm_refs';
import type { user, userId } from './user';

export interface pgm_submissionAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  rating?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  album_id?: number;
  program_id?: number;
  questionnaire_id?: number;
}

export type pgm_submissionPk = "id";
export type pgm_submissionId = pgm_submission[pgm_submissionPk];
export type pgm_submissionOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "rating" | "created_by_id" | "last_modified_by_id" | "organization_id" | "album_id" | "program_id" | "questionnaire_id";
export type pgm_submissionCreationAttributes = Optional<pgm_submissionAttributes, pgm_submissionOptionalAttributes>;

export class pgm_submission extends Model<pgm_submissionAttributes, pgm_submissionCreationAttributes> implements pgm_submissionAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  rating?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  album_id?: number;
  program_id?: number;
  questionnaire_id?: number;

  // pgm_submission belongsTo album via album_id
  album!: album;
  getAlbum!: Sequelize.BelongsToGetAssociationMixin<album>;
  setAlbum!: Sequelize.BelongsToSetAssociationMixin<album, albumId>;
  createAlbum!: Sequelize.BelongsToCreateAssociationMixin<album>;
  // pgm_submission belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // pgm_submission belongsTo evt_program via program_id
  program!: evt_program;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<evt_program>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<evt_program, evt_programId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<evt_program>;
  // pgm_submission belongsTo pgm_quest via questionnaire_id
  questionnaire!: pgm_quest;
  getQuestionnaire!: Sequelize.BelongsToGetAssociationMixin<pgm_quest>;
  setQuestionnaire!: Sequelize.BelongsToSetAssociationMixin<pgm_quest, pgm_questId>;
  createQuestionnaire!: Sequelize.BelongsToCreateAssociationMixin<pgm_quest>;
  // pgm_submission hasMany pgm_judge via program_submission_id
  pgm_judges!: pgm_judge[];
  getPgm_judges!: Sequelize.HasManyGetAssociationsMixin<pgm_judge>;
  setPgm_judges!: Sequelize.HasManySetAssociationsMixin<pgm_judge, pgm_judgeId>;
  addPgm_judge!: Sequelize.HasManyAddAssociationMixin<pgm_judge, pgm_judgeId>;
  addPgm_judges!: Sequelize.HasManyAddAssociationsMixin<pgm_judge, pgm_judgeId>;
  createPgm_judge!: Sequelize.HasManyCreateAssociationMixin<pgm_judge>;
  removePgm_judge!: Sequelize.HasManyRemoveAssociationMixin<pgm_judge, pgm_judgeId>;
  removePgm_judges!: Sequelize.HasManyRemoveAssociationsMixin<pgm_judge, pgm_judgeId>;
  hasPgm_judge!: Sequelize.HasManyHasAssociationMixin<pgm_judge, pgm_judgeId>;
  hasPgm_judges!: Sequelize.HasManyHasAssociationsMixin<pgm_judge, pgm_judgeId>;
  countPgm_judges!: Sequelize.HasManyCountAssociationsMixin;
  // pgm_submission hasMany pgm_quest via program_submission_id
  pgm_quests!: pgm_quest[];
  getPgm_quests!: Sequelize.HasManyGetAssociationsMixin<pgm_quest>;
  setPgm_quests!: Sequelize.HasManySetAssociationsMixin<pgm_quest, pgm_questId>;
  addPgm_quest!: Sequelize.HasManyAddAssociationMixin<pgm_quest, pgm_questId>;
  addPgm_quests!: Sequelize.HasManyAddAssociationsMixin<pgm_quest, pgm_questId>;
  createPgm_quest!: Sequelize.HasManyCreateAssociationMixin<pgm_quest>;
  removePgm_quest!: Sequelize.HasManyRemoveAssociationMixin<pgm_quest, pgm_questId>;
  removePgm_quests!: Sequelize.HasManyRemoveAssociationsMixin<pgm_quest, pgm_questId>;
  hasPgm_quest!: Sequelize.HasManyHasAssociationMixin<pgm_quest, pgm_questId>;
  hasPgm_quests!: Sequelize.HasManyHasAssociationsMixin<pgm_quest, pgm_questId>;
  countPgm_quests!: Sequelize.HasManyCountAssociationsMixin;
  // pgm_submission hasMany pgm_rating via entity_id
  pgm_ratings!: pgm_rating[];
  getPgm_ratings!: Sequelize.HasManyGetAssociationsMixin<pgm_rating>;
  setPgm_ratings!: Sequelize.HasManySetAssociationsMixin<pgm_rating, pgm_ratingId>;
  addPgm_rating!: Sequelize.HasManyAddAssociationMixin<pgm_rating, pgm_ratingId>;
  addPgm_ratings!: Sequelize.HasManyAddAssociationsMixin<pgm_rating, pgm_ratingId>;
  createPgm_rating!: Sequelize.HasManyCreateAssociationMixin<pgm_rating>;
  removePgm_rating!: Sequelize.HasManyRemoveAssociationMixin<pgm_rating, pgm_ratingId>;
  removePgm_ratings!: Sequelize.HasManyRemoveAssociationsMixin<pgm_rating, pgm_ratingId>;
  hasPgm_rating!: Sequelize.HasManyHasAssociationMixin<pgm_rating, pgm_ratingId>;
  hasPgm_ratings!: Sequelize.HasManyHasAssociationsMixin<pgm_rating, pgm_ratingId>;
  countPgm_ratings!: Sequelize.HasManyCountAssociationsMixin;
  // pgm_submission hasMany pgm_refs via program_submission_id
  pgm_refs!: pgm_refs[];
  getPgm_refs!: Sequelize.HasManyGetAssociationsMixin<pgm_refs>;
  setPgm_refs!: Sequelize.HasManySetAssociationsMixin<pgm_refs, pgm_refsId>;
  addPgm_ref!: Sequelize.HasManyAddAssociationMixin<pgm_refs, pgm_refsId>;
  addPgm_refs!: Sequelize.HasManyAddAssociationsMixin<pgm_refs, pgm_refsId>;
  createPgm_ref!: Sequelize.HasManyCreateAssociationMixin<pgm_refs>;
  removePgm_ref!: Sequelize.HasManyRemoveAssociationMixin<pgm_refs, pgm_refsId>;
  removePgm_refs!: Sequelize.HasManyRemoveAssociationsMixin<pgm_refs, pgm_refsId>;
  hasPgm_ref!: Sequelize.HasManyHasAssociationMixin<pgm_refs, pgm_refsId>;
  hasPgm_refs!: Sequelize.HasManyHasAssociationsMixin<pgm_refs, pgm_refsId>;
  countPgm_refs!: Sequelize.HasManyCountAssociationsMixin;
  // pgm_submission belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // pgm_submission belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pgm_submission {
    return pgm_submission.init({
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
    album_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'album',
        key: 'id'
      }
    },
    program_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_program',
        key: 'id'
      }
    },
    questionnaire_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'pgm_quest',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pgm_submission',
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
        name: "FK51u60yxkd1xaykhk9p6hfwji0",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKcqu7ff4msc6k81q5g3ta4bxvn",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKq53e425oybvf8447imtfcggtw",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKpfd2cm4viof9x1fc14n6u3i1v",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
      {
        name: "FKk7fqq5iw4epm2f2wo7w49r8ly",
        using: "BTREE",
        fields: [
          { name: "program_id" },
        ]
      },
      {
        name: "FK2t05ae6pw3qey8fk9cbmtcepb",
        using: "BTREE",
        fields: [
          { name: "questionnaire_id" },
        ]
      },
    ]
  });
  }
}
