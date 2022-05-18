import {classToPlain, deserialize, serialize, Expose, Type, Exclude} from 'class-transformer';


export class IohImage{
  @Expose({name: 'id'})
  imageId!: number;

  @Expose({name: 'url'})
  urlImage!: string;

  @Expose({name: 'cloudinary_id'})
  cloudinaryIdImage!: string;

  @Expose({name: 'type'})
  typeImage!: string;

  @Expose({name: 'product_id'})
  productIdImage!: number;

  @Expose({name: 'created_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  createdAt?: Date;

  @Expose({name: 'updated_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  updatedAt?: Date;

  static fromJson(imageDto: any): IohImage{
    return deserialize(IohImage, imageDto);
  }
  serialize(): string{
    return serialize(this);
  }
  toPlain(): any{
    return classToPlain(this);
  }
}
