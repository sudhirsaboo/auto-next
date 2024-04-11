import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DATABASECHANGELOGLOCKAttributes {
  ID: number;
  LOCKED: boolean;
  LOCKGRANTED?: Date;
  LOCKEDBY?: string;
}

export type DATABASECHANGELOGLOCKPk = "ID";
export type DATABASECHANGELOGLOCKId = DATABASECHANGELOGLOCK[DATABASECHANGELOGLOCKPk];
export type DATABASECHANGELOGLOCKOptionalAttributes = "LOCKGRANTED" | "LOCKEDBY";
export type DATABASECHANGELOGLOCKCreationAttributes = Optional<DATABASECHANGELOGLOCKAttributes, DATABASECHANGELOGLOCKOptionalAttributes>;

export class DATABASECHANGELOGLOCK extends Model<DATABASECHANGELOGLOCKAttributes, DATABASECHANGELOGLOCKCreationAttributes> implements DATABASECHANGELOGLOCKAttributes {
  ID!: number;
  LOCKED!: boolean;
  LOCKGRANTED?: Date;
  LOCKEDBY?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DATABASECHANGELOGLOCK {
    return DATABASECHANGELOGLOCK.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LOCKED: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    LOCKGRANTED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LOCKEDBY: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DATABASECHANGELOGLOCK',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
