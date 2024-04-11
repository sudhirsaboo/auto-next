import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { evt_att_add, evt_att_addId } from './evt_att_add';
import type { evt_att_profile, evt_att_profileId } from './evt_att_profile';
import type { evt_barcode, evt_barcodeId } from './evt_barcode';
import type { evt_program, evt_programId } from './evt_program';
import type { evt_tkt_class, evt_tkt_classId } from './evt_tkt_class';
import type { user, userId } from './user';

export interface evt_attendeeAttributes {
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
  addresses_id?: number;
  barcodes_id?: number;
  profile_id?: number;
  program_id?: number;
  ticket_class_id?: number;
}

export type evt_attendeePk = "id";
export type evt_attendeeId = evt_attendee[evt_attendeePk];
export type evt_attendeeOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "created_by_id" | "last_modified_by_id" | "organization_id" | "addresses_id" | "barcodes_id" | "profile_id" | "program_id" | "ticket_class_id";
export type evt_attendeeCreationAttributes = Optional<evt_attendeeAttributes, evt_attendeeOptionalAttributes>;

export class evt_attendee extends Model<evt_attendeeAttributes, evt_attendeeCreationAttributes> implements evt_attendeeAttributes {
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
  addresses_id?: number;
  barcodes_id?: number;
  profile_id?: number;
  program_id?: number;
  ticket_class_id?: number;

  // evt_attendee belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_attendee belongsTo evt_att_add via addresses_id
  address!: evt_att_add;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<evt_att_add>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<evt_att_add, evt_att_addId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<evt_att_add>;
  // evt_attendee belongsTo evt_att_profile via profile_id
  profile!: evt_att_profile;
  getProfile!: Sequelize.BelongsToGetAssociationMixin<evt_att_profile>;
  setProfile!: Sequelize.BelongsToSetAssociationMixin<evt_att_profile, evt_att_profileId>;
  createProfile!: Sequelize.BelongsToCreateAssociationMixin<evt_att_profile>;
  // evt_attendee belongsTo evt_barcode via barcodes_id
  barcode!: evt_barcode;
  getBarcode!: Sequelize.BelongsToGetAssociationMixin<evt_barcode>;
  setBarcode!: Sequelize.BelongsToSetAssociationMixin<evt_barcode, evt_barcodeId>;
  createBarcode!: Sequelize.BelongsToCreateAssociationMixin<evt_barcode>;
  // evt_attendee belongsTo evt_program via program_id
  program!: evt_program;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<evt_program>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<evt_program, evt_programId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<evt_program>;
  // evt_attendee belongsTo evt_tkt_class via ticket_class_id
  ticket_class!: evt_tkt_class;
  getTicket_class!: Sequelize.BelongsToGetAssociationMixin<evt_tkt_class>;
  setTicket_class!: Sequelize.BelongsToSetAssociationMixin<evt_tkt_class, evt_tkt_classId>;
  createTicket_class!: Sequelize.BelongsToCreateAssociationMixin<evt_tkt_class>;
  // evt_attendee belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_attendee belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_attendee {
    return evt_attendee.init({
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
    addresses_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_att_add',
        key: 'id'
      }
    },
    barcodes_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_barcode',
        key: 'id'
      }
    },
    profile_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_att_profile',
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
    ticket_class_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'evt_tkt_class',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evt_attendee',
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
        name: "FKj0no1emcjx1yy77v914fvy2yq",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKg1do5ppg4dqamwkeoye4wxl4v",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FK8ywvgvf5d58a8y02pl4bp2eqo",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
      {
        name: "FKsirh9ymwcek3scv8pu1j6eofn",
        using: "BTREE",
        fields: [
          { name: "addresses_id" },
        ]
      },
      {
        name: "FKee7w83p1v3koeuts7dduuvv4d",
        using: "BTREE",
        fields: [
          { name: "barcodes_id" },
        ]
      },
      {
        name: "FKthaky9prggqyr8yx8p4l1kpoy",
        using: "BTREE",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "FKpremv0rw80y43w6q3pnpw28iw",
        using: "BTREE",
        fields: [
          { name: "program_id" },
        ]
      },
      {
        name: "FKn3b4sj89tmngoonxbdox3ftbw",
        using: "BTREE",
        fields: [
          { name: "ticket_class_id" },
        ]
      },
    ]
  });
  }
}
