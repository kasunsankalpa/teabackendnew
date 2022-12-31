import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateCollectDto {
  @IsNumber()
  @IsNotEmpty()
  qty: number;

  @IsDateString()
  @IsOptional()
  dateTime: Date;

  @IsNumber()
  @IsNotEmpty()
  status: number;

  @IsNumber()
  @IsNotEmpty()
  member: any;
}
