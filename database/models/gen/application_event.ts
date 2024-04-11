import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ent_org, ent_orgId } from './ent_org';
import type { user, userId } from './user';

export interface application_eventAttributes {
  id: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version: number;
  client_address?: string;
  ip?: string;
  method?: string;
  processing_time_millis: number;
  request_url?: string;
  servlet_name?: string;
  session_id?: string;
  status_code: number;
  user_name?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;
}

export type application_eventPk = "id";
export type application_eventId = application_event[application_eventPk];
export type application_eventOptionalAttributes = "created_date" | "last_modified_date" | "description" | "display_name" | "name" | "status" | "client_address" | "ip" | "method" | "request_url" | "servlet_name" | "session_id" | "user_name" | "created_by_id" | "last_modified_by_id" | "organization_id";
export type application_eventCreationAttributes = Optional<application_eventAttributes, application_eventOptionalAttributes>;

export class application_event extends Model<application_eventAttributes, application_eventCreationAttributes> implements application_eventAttributes {
  id!: number;
  created_date?: Date;
  last_modified_date?: Date;
  description?: string;
  display_name?: string;
  name?: string;
  status?: string;
  version!: number;
  client_address?: string;
  ip?: string;
  method?: string;
  processing_time_millis!: number;
  request_url?: string;
  servlet_name?: string;
  session_id?: string;
  status_code!: number;
  user_name?: string;
  created_by_id?: number;
  last_modified_by_id?: number;
  organization_id?: number;

  // application_event belongsTo ent_org via organization_id
  organization!: ent_org;
  getOrganization!: Sequelize.BelongsToGetAssociationMixin<ent_org>;
  setOrganization!: Sequelize.BelongsToSetAssociationMixin<ent_org, ent_orgId>;
  createOrganization!: Sequelize.BelongsToCreateAssociationMixin<ent_org>;
  // application_event belongsTo user via last_modified_by_id
  last_modified_by!: user;
  getLast_modified_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setLast_modified_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createLast_modified_by!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // application_event belongsTo user via created_by_id
  created_by!: user;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof application_event {
    return application_event.init({
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
    client_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    processing_time_millis: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    request_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    servlet_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_name: {
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
    }
  }, {
    sequelize,
    tableName: 'application_event',
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
        name: "FKnbkgekts79h25rcki9lu5b3e0",
        using: "BTREE",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "FKglah47a7slwke8m1o5b72wsm6",
        using: "BTREE",
        fields: [
          { name: "last_modified_by_id" },
        ]
      },
      {
        name: "FKr1juwy3belrrvgv8prn0kc15l",
        using: "BTREE",
        fields: [
          { name: "organization_id" },
        ]
      },
    ]
  });
  }
}
