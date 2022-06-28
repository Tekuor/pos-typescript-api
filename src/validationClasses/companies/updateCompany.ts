import {
  IsDefined,
  IsEmail,
  IsString,
  IsOptional,
  IsPhoneNumber,
} from "class-validator";
import { Expose } from "class-transformer";

export class UpdateCompanyValidation {
  @IsDefined()
  @Expose()
  @IsString()
  @IsOptional()
  name: String;

  @IsDefined()
  @Expose()
  @IsOptional()
  description: String;

  @IsDefined()
  @Expose()
  @IsString()
  @IsOptional()
  logo: String;

  @IsDefined()
  @Expose()
  @IsString()
  @IsOptional()
  categoryId: String;

  @IsDefined()
  @Expose()
  @IsPhoneNumber("GH")
  @IsOptional()
  phoneNumber: String;

  @IsDefined()
  @Expose()
  @IsString()
  @IsOptional()
  address: String;

  @IsDefined()
  @Expose()
  @IsEmail()
  @IsOptional()
  email: String;
}
