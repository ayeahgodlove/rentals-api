
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import { IProduct, emptyProduct } from "../../domain/models/product";
import { nanoid } from "nanoid";

export class ProductRequestDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 128)
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  longDescription: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsNumber()
  durationOfRentage: number;

  @IsNotEmpty()
  @IsString()
  condition: string;

  @IsNotEmpty()
  availabilityStartDate: Date;

  @IsNotEmpty()
  availabilityEndDate: Date;

  @IsNotEmpty()
  availabilityStartTime: Date;

  @IsNotEmpty()
  availabilityEndTime: Date;

  constructor(data: IProduct) {
    this.name = data.name;
    this.description = data.description;
    this.longDescription = data.longDescription;
    this.condition = data.condition;
    this.amount = data.amount;
    this.durationOfRentage = data.durationOfRentage;
    this.availabilityStartDate = data.availabilityStartDate;
    this.availabilityEndDate = data.availabilityEndDate;
    this.availabilityEndTime = data.availabilityEndTime;
    this.availabilityStartTime = data.availabilityStartTime;
  }

  toData(): IProduct {
    return {
      ...emptyProduct,
      id: nanoid(10),
      name: this.name,
      description: this.description,
      longDescription: this.longDescription,
      amount: this.amount,
      durationOfRentage: this.durationOfRentage,
      condition: this.condition,
      availabilityEndDate: this.availabilityEndDate,
      availabilityEndTime: this.availabilityEndTime,
      availabilityStartDate: this.availabilityStartDate,
      availabilityStartTime: this.availabilityStartTime,
    };
  }

  toUpdateData(data: IProduct): IProduct {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      longDescription: data.longDescription,
      amount: data.amount,
      durationOfRentage: data.durationOfRentage,
      condition: data.condition,
      availabilityEndDate: data.availabilityEndDate,
      availabilityEndTime: data.availabilityEndTime,
      availabilityStartDate: data.availabilityStartDate,
      availabilityStartTime: data.availabilityStartTime,
    };
  }
}
