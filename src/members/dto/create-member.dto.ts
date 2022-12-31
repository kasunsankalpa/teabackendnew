import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  mobileNumber: string;

  @IsString()
  @IsNotEmpty()
  nic: string;

  @IsString()
  @IsOptional()
  addressLine1: string;

  @IsString()
  @IsOptional()
  addressLine2: string;

  @IsString()
  @IsOptional()
  addressLine3: string;
}
