import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_att_team, evt_att_teamId } from './evt_att_team';
import type { evt_attendee, evt_attendeeId } from './evt_attendee';
import type { evt_organizer, evt_organizerId } from './evt_organizer';
import type { evt_prog_cat, evt_prog_catId } from './evt_prog_cat';
import type { evt_prog_fmt, evt_prog_fmtId } from './evt_prog_fmt';
import type { evt_schedule, evt_scheduleId } from './evt_schedule';
import type { evt_venue, evt_venueId } from './evt_venue';
import type { pgm_submission, pgm_submissionId } from './pgm_submission';
import type { upload, uploadId } from './upload';
import type { user, userId } from './user';

export interface evt_programAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  capacity: number;
  currency?: string;
  end?: Date;
  invite_only: boolean;
  listed: boolean;
  online_event: boolean;
  password?: string;
  requirements?: string;
  shareable: boolean;
  show_remaining: boolean;
  sort_order: number;
  start?: Date;
  url?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  category_id?: number;
  cover_id?: number;
  format_id?: number;
  logo_id?: number;
  organizer_id?: number;
  schedule_id?: number;
  subcategory_id?: number;
  venue_id?: number;
}

export type evt_programPk = "id";
export type evt_programId = evt_program[evt_programPk];
export type evt_programOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "currency" | "end" | "password" | "requirements" | "start" | "url" | "created_by_id" | "last_modified_by_id" | "organization_id" | "category_id" | "cover_id" | "format_id" | "logo_id" | "organizer_id" | "schedule_id" | "subcategory_id" | "venue_id";
export type evt_programCreationAttributes = Optional<evt_programAttributes, evt_programOptionalAttributes>;

export class evt_program extends Model<evt_programAttributes, evt_programCreationAttributes> implements evt_programAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  capacity!: number;
  currency?: string;
  end?: Date;
  invite_only!: boolean;
  listed!: boolean;
  online_event!: boolean;
  password?: string;
  requirements?: string;
  shareable!: boolean;
  show_remaining!: boolean;
  sort_order!: number;
  start?: Date;
  url?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
  category_id?: number;
  cover_id?: number;
  format_id?: number;
  logo_id?: number;
  organizer_id?: number;
  schedule_id?: number;
  subcategory_id?: number;
  venue_id?: number;

  // evt_program belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_program belongsTo evt_organizer via organizer_id
  organizer!: evt_organizer;
  getOrganizer!: Sequelize.BelongsToGetAssociationMixin<evt_organizer>;
  setOrganizer!: Sequelize.BelongsToSetAssociationMixin<evt_organizer, evt_organizerId>;
  createOrganizer!: Sequelize.BelongsToCreateAssociationMixin<evt_organizer>;
  // evt_program belongsTo evt_prog_cat via subcategory_id
  subcategory!: evt_prog_cat;
  getSubcategory!: Sequelize.BelongsToGetAssociationMixin<evt_prog_cat>;
  setSubcategory!: Sequelize.BelongsToSetAssociationMixin<evt_prog_cat, evt_prog_catId>;
  createSubcategory!: Sequelize.BelongsToCreateAssociationMixin<evt_prog_cat>;
  // evt_program belongsTo evt_prog_cat via category_id
  category!: evt_prog_cat;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<evt_prog_cat>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<evt_prog_cat, evt_prog_catId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<evt_prog_cat>;
  // evt_program belongsTo evt_prog_fmt via format_id
  format!: evt_prog_fmt;
  getFormat!: Sequelize.BelongsToGetAssociationMixin<evt_prog_fmt>;
  setFormat!: Sequelize.BelongsToSetAssociationMixin<evt_prog_fmt, evt_prog_fmtId>;
  createFormat!: Sequelize.BelongsToCreateAssociationMixin<evt_prog_fmt>;
  // evt_program hasMany evt_att_team via program_id
  evt_att_teams!: evt_att_team[];
  getEvt_att_teams!: Sequelize.HasManyGetAssociationsMixin<evt_att_team>;
  setEvt_att_teams!: Sequelize.HasManySetAssociationsMixin<evt_att_team, evt_att_teamId>;
  addEvt_att_team!: Sequelize.HasManyAddAssociationMixin<evt_att_team, evt_att_teamId>;
  addEvt_att_teams!: Sequelize.HasManyAddAssociationsMixin<evt_att_team, evt_att_teamId>;
  createEvt_att_team!: Sequelize.HasManyCreateAssociationMixin<evt_att_team>;
  removeEvt_att_team!: Sequelize.HasManyRemoveAssociationMixin<evt_att_team, evt_att_teamId>;
  removeEvt_att_teams!: Sequelize.HasManyRemoveAssociationsMixin<evt_att_team, evt_att_teamId>;
  hasEvt_att_team!: Sequelize.HasManyHasAssociationMixin<evt_att_team, evt_att_teamId>;
  hasEvt_att_teams!: Sequelize.HasManyHasAssociationsMixin<evt_att_team, evt_att_teamId>;
  countEvt_att_teams!: Sequelize.HasManyCountAssociationsMixin;
  // evt_program hasMany evt_attendee via program_id
  evt_attendees!: evt_attendee[];
  getEvt_attendees!: Sequelize.HasManyGetAssociationsMixin<evt_attendee>;
  setEvt_attendees!: Sequelize.HasManySetAssociationsMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendee!: Sequelize.HasManyAddAssociationMixin<evt_attendee, evt_attendeeId>;
  addEvt_attendees!: Sequelize.HasManyAddAssociationsMixin<evt_attendee, evt_attendeeId>;
  createEvt_attendee!: Sequelize.HasManyCreateAssociationMixin<evt_attendee>;
  removeEvt_attendee!: Sequelize.HasManyRemoveAssociationMixin<evt_attendee, evt_attendeeId>;
  removeEvt_attendees!: Sequelize.HasManyRemoveAssociationsMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendee!: Sequelize.HasManyHasAssociationMixin<evt_attendee, evt_attendeeId>;
  hasEvt_attendees!: Sequelize.HasManyHasAssociationsMixin<evt_attendee, evt_attendeeId>;
  countEvt_attendees!: Sequelize.HasManyCountAssociationsMixin;
  // evt_program hasMany pgm_submission via program_id
  pgm_submissions!: pgm_submission[];
  getPgm_submissions!: Sequelize.HasManyGetAssociationsMixin<pgm_submission>;
  setPgm_submissions!: Sequelize.HasManySetAssociationsMixin<pgm_submission, pgm_submissionId>;
  addPgm_submission!: Sequelize.HasManyAddAssociationMixin<pgm_submission, pgm_submissionId>;
  addPgm_submissions!: Sequelize.HasManyAddAssociationsMixin<pgm_submission, pgm_submissionId>;
  createPgm_submission!: Sequelize.HasManyCreateAssociationMixin<pgm_submission>;
  removePgm_submission!: Sequelize.HasManyRemoveAssociationMixin<pgm_submission, pgm_submissionId>;
  removePgm_submissions!: Sequelize.HasManyRemoveAssociationsMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submission!: Sequelize.HasManyHasAssociationMixin<pgm_submission, pgm_submissionId>;
  hasPgm_submissions!: Sequelize.HasManyHasAssociationsMixin<pgm_submission, pgm_submissionId>;
  countPgm_submissions!: Sequelize.HasManyCountAssociationsMixin;
  // evt_program belongsTo evt_schedule via schedule_id
  schedule!: evt_schedule;
  getSchedule!: Sequelize.BelongsToGetAssociationMixin<evt_schedule>;
  setSchedule!: Sequelize.BelongsToSetAssociationMixin<evt_schedule, evt_scheduleId>;
  createSchedule!: Sequelize.BelongsToCreateAssociationMixin<evt_schedule>;
  // evt_program belongsTo evt_venue via venue_id
  venue!: evt_venue;
  getVenue!: Sequelize.BelongsToGetAssociationMixin<evt_venue>;
  setVenue!: Sequelize.BelongsToSetAssociationMixin<evt_venue, evt_venueId>;
  createVenue!: Sequelize.BelongsToCreateAssociationMixin<evt_venue>;
  // evt_program belongsTo upload via logo_id
  logo!: upload;
  getLogo!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setLogo!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createLogo!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // evt_program belongsTo upload via cover_id
  cover!: upload;
  getCover!: Sequelize.BelongsToGetAssociationMixin<upload>;
  setCover!: Sequelize.BelongsToSetAssociationMixin<upload, uploadId>;
  createCover!: Sequelize.BelongsToCreateAssociationMixin<upload>;
  // evt_program belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_program belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_program {
    return evt_program.init({
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
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    invite_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    listed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    online_event: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shareable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    show_remaining: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    url: {
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
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_prog_cat',
        key: 'id'
      }
    },
    cover_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    },
    format_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_prog_fmt',
        key: 'id'
      }
    },
    logo_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'upload',
        key: 'id'
      }
    },
    organizer_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_organizer',
        key: 'id'
      }
    },
    schedule_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_schedule',
        key: 'id'
      }
    },
    subcategory_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_prog_cat',
        key: 'id'
      }
    },
    venue_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_venue',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evt_program',
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
        name: "FK81khc8oqx248ys0abvntcmm6q",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKqwrnq8f08hx4duuqlhehsapwi",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKbo1lrjxa1p0jt78q21p4nxxfo",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKnvx7ebtl2kb3vyxpah817mf67",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "FKm0tjwd9nhpe8m5rtaum5x8vd4",
        using: "BTREE",
        fields: [
          { name: "cover_id" },
        ]
      },
      {
        name: "FKoy5kfvvv4her7p607sa3gfs6h",
        using: "BTREE",
        fields: [
          { name: "format_id" },
        ]
      },
      {
        name: "FK8um1e9dpjj6gle3xekynsp3g2",
        using: "BTREE",
        fields: [
          { name: "logo_id" },
        ]
      },
      {
        name: "FKd4bui2erfnif6c3fxabgw46sn",
        using: "BTREE",
        fields: [
          { name: "organizer_id" },
        ]
      },
      {
        name: "FK4kpmtex5791rrpd1fri43q96r",
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
        ]
      },
      {
        name: "FK1uqikdnfdf2713yq2h0h6t9u1",
        using: "BTREE",
        fields: [
          { name: "subcategory_id" },
        ]
      },
      {
        name: "FKagt8g4ryreuhse62lxhg2a5tw",
        using: "BTREE",
        fields: [
          { name: "venue_id" },
        ]
      },
    ]
  });
  }
}
