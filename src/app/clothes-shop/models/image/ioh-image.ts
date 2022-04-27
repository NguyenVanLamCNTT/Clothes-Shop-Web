import {classToPlain, deserialize, serialize, Expose, Type, Exclude} from 'class-transformer';


export class IohImage{
  @Expose({name: 'id'})
  imageId: number | undefined;

  @Expose({name: 'url'})
  urlImage: string | undefined;

  @Expose({name: 'cloudinary_id'})
  cloudinaryIdImage: string | undefined;

  @Expose({name: 'type'})
  typeImage: string | undefined;

  @Expose({name: 'product_id'})
  productIdImage: number | undefined;

  @Expose({name: 'created_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  createAt?: Date;

  @Expose({name: 'updated_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  updateAt?: Date;

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
