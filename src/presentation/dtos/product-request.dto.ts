
import { IsNotEmpty, IsNumber, IsString, IsArray } from "class-validator";
import { IProduct, emptyProduct } from "../../domain/models/product";
import { nanoid } from "nanoid";
export class ProductRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  storeId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

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

  
  @IsNotEmpty()
  @IsArray()
  images: string[];

  constructor(data: IProduct) {
    this.name = data.name;
    this.storeId = data.storeId;
    this.description = data.description;
    this.condition = data.condition;
    this.amount = data.amount;
    this.durationOfRentage = data.durationOfRentage;
    this.availabilityStartDate = data.availabilityStartDate;
    this.availabilityEndDate = data.availabilityEndDate;
    this.availabilityEndTime = data.availabilityEndTime;
    this.availabilityStartTime = data.availabilityStartTime;
    this.images = data.images
  }

  toData(): IProduct {
    return {
      ...emptyProduct,
      id: nanoid(10),
      storeId: this.storeId,
      name: this.name,
      description: this.description,
      amount: this.amount,
      durationOfRentage: this.durationOfRentage,
      condition: this.condition,
      availabilityEndDate: this.availabilityEndDate,
      availabilityEndTime: this.availabilityEndTime,
      availabilityStartDate: this.availabilityStartDate,
      availabilityStartTime: this.availabilityStartTime,
      images: this.images
    };
  }

  toUpdateData(data: IProduct): IProduct {
    return {
      id: data.id,
      name: data.name,
      storeId: data.storeId,
      description: data.description,
      amount: data.amount,
      durationOfRentage: data.durationOfRentage,
      condition: data.condition,
      availabilityEndDate: data.availabilityEndDate,
      availabilityEndTime: data.availabilityEndTime,
      availabilityStartDate: data.availabilityStartDate,
      availabilityStartTime: data.availabilityStartTime,
      images: data.images
    };
  }
}
