import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DATABASECHANGELOGAttributes {
  ID: string;
  AUTHOR: string;
  FILENAME: string;
  DATEEXECUTED: Date;
  ORDEREXECUTED: number;
  EXECTYPE: string;
  MD5SUM?: string;
  DESCRIPTION?: string;
  COMMENTS?: string;
  TAG?: string;
  LIQUIBASE?: string;
  CONTEXTS?: string;
  LABELS?: string;
  DEPLOYMENT_ID?: string;
}

export type DATABASECHANGELOGPk = "ID";
export type DATABASECHANGELOGId = DATABASECHANGELOG[DATABASECHANGELOGPk];
export type DATABASECHANGELOGOptionalAttributes = "MD5SUM" | "DESCRIPTION" | "COMMENTS" | "TAG" | "LIQUIBASE" | "CONTEXTS" | "LABELS" | "DEPLOYMENT_ID";
export type DATABASECHANGELOGCreationAttributes = Optional<DATABASECHANGELOGAttributes, DATABASECHANGELOGOptionalAttributes>;

export class DATABASECHANGELOG extends Model<DATABASECHANGELOGAttributes, DATABASECHANGELOGCreationAttributes> implements DATABASECHANGELOGAttributes {
  ID!: string;
  AUTHOR!: string;
  FILENAME!: string;
  DATEEXECUTED!: Date;
  ORDEREXECUTED!: number;
  EXECTYPE!: string;
  MD5SUM?: string;
  DESCRIPTION?: string;
  COMMENTS?: string;
  TAG?: string;
  LIQUIBASE?: string;
  CONTEXTS?: string;
  LABELS?: string;
  DEPLOYMENT_ID?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DATABASECHANGELOG {
    return DATABASECHANGELOG.init({
    ID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    AUTHOR: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FILENAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DATEEXECUTED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ORDEREXECUTED: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EXECTYPE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    MD5SUM: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMMENTS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TAG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LIQUIBASE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CONTEXTS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LABELS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEPLOYMENT_ID: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DATABASECHANGELOG',
    timestamps: false
  });
  }
}
