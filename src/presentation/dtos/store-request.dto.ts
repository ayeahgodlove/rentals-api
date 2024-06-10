// src/presentation/dtos/store-request.dto.ts

import { IsNotEmpty, IsString } from "class-validator";
import { IStore, emptyStore } from "../../domain/models/store";
import { nanoid } from "nanoid";

export class StoreRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  imageBannerUrl: string;

  constructor(data: IStore) {
    this.name = data.name;
    this.location = data.location;
    this.imageBannerUrl = data.imageBannerUrl
  }

  toData(): IStore {
    return {
      ...emptyStore,
      id: nanoid(10),
      name: this.name,
      location: this.location,
      imageBannerUrl: this.imageBannerUrl,
    };
  }

  toUpdateData(data: IStore): IStore {
    return {
      id: data.id,
      name: data.name,
      location: data.location,
      imageBannerUrl: data.imageBannerUrl,
    };
  }
}
