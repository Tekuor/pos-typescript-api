import {
  IsDefined,
  IsEmail,
  IsString,
  IsOptional,
  IsPhoneNumber,
} from "class-validator";
import { Expose } from "class-transformer";

export class CreateCompanyValidation {
  @IsDefined()
  @Expose()
  @IsString()
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
  categoryId: String;

  @IsDefined()
  @Expose()
  @IsPhoneNumber("GH")
  phoneNumber: String;

  @IsDefined()
  @Expose()
  @IsString()
  address: String;

  @IsDefined()
  @Expose()
  @IsEmail()
  email: String;
}
