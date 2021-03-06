import {
  AutoIncrement,
  Column,
  DataType,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from 'src/models/account/account.entity';
import { Food, StepDetails } from 'src/models/food/entities';

@Table
export class File extends Model {
  /** COLUMNS */
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.DATE)
  uploadedAt: Date;

  @Column(DataType.INTEGER)
  idAccount: number;

  @Column(DataType.INTEGER)
  type: number;

  @Column(DataType.STRING)
  mimeType: string;

  /** RELATIONS */
  @HasOne(() => Account)
  account: Account;

  @HasOne(() => Food)
  food: Food;

  @HasOne(() => StepDetails)
  stepDetails: StepDetails;
}
