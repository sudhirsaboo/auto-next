import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface evt_discountAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  amount_off?: string;
  code?: string;
  end_date?: Date;
  percent_off?: string;
  program?: any;
  qty_available: number;
  qty_sold: number;
  start_date?: Date;
  ticket_ids?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type evt_discountPk = "id";
export type evt_discountId = evt_discount[evt_discountPk];
export type evt_discountOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "amount_off" | "code" | "end_date" | "percent_off" | "program" | "start_date" | "ticket_ids" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type evt_discountCreationAttributes = Optional<evt_discountAttributes, evt_discountOptionalAttributes>;

export class evt_discount extends Model<evt_discountAttributes, evt_discountCreationAttributes> implements evt_discountAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  amount_off?: string;
  code?: string;
  end_date?: Date;
  percent_off?: string;
  program?: any;
  qty_available!: number;
  qty_sold!: number;
  start_date?: Date;
  ticket_ids?: any;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // evt_discount belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // evt_discount belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // evt_discount belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof evt_discount {
    return evt_discount.init({
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
    amount_off: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    percent_off: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    program: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    qty_available: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty_sold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    ticket_ids: {
      type: DataTypes.BLOB,
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
    }
  }, {
    sequelize,
    tableName: 'evt_discount',
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
        name: "FKep5lin9rw0t2m9ysp53hi530g",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKj1ilau1piceoctk65iq99o77u",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKso3r2k0a46patuuv23j5nguuf",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
