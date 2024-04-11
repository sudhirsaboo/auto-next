import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { billing_details, billing_detailsId } from './billing_details';

export interface credit_cardAttributes {
  cc_exp_month: string;
  cc_exp_year: string;
  cc_number: string;
  cc_type: string;
  credit_card_id: number;
}

export type credit_cardPk = "credit_card_id";
export type credit_cardId = credit_card[credit_cardPk];
export type credit_cardCreationAttributes = credit_cardAttributes;

export class credit_card extends Model<credit_cardAttributes, credit_cardCreationAttributes> implements credit_cardAttributes {
  cc_exp_month!: string;
  cc_exp_year!: string;
  cc_number!: string;
  cc_type!: string;
  credit_card_id!: number;

  // credit_card belongsTo billing_details via credit_card_id
  credit_card!: billing_details;
  getCredit_card!: Sequelize.BelongsToGetAssociationMixin<billing_details>;
  setCredit_card!: Sequelize.BelongsToSetAssociationMixin<billing_details, billing_detailsId>;
  createCredit_card!: Sequelize.BelongsToCreateAssociationMixin<billing_details>;

  static initModel(sequelize: Sequelize.Sequelize): typeof credit_card {
    return credit_card.init({
    cc_exp_month: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    cc_exp_year: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    cc_number: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    cc_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    credit_card_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'billing_details',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'credit_card',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "credit_card_id" },
        ]
      },
    ]
  });
  }
}
