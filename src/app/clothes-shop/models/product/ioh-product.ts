import {classToPlain, deserialize, Exclude, Expose, Type, serialize} from 'class-transformer';
import {IohImage} from '../image/ioh-image';

export class IohProduct{
  @Expose({name: 'id'})
  productId!: number;

  @Expose({name: 'name'})
  productName!: string;

  @Expose({name: 'price'})
  productPrice!: string;

  @Expose({name: 'status'})
  productStatus!: string;

  @Expose({name: 'discount'})
  productDiscount!: number;

  @Expose({name: 'images'})
  @Type(() => IohImage)
  productImages!: IohImage[];

  @Expose({name: 'created_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  createdAt?: Date;

  @Expose({name: 'updated_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  updatedAt?: Date;

  static fromJson(productDto: any): IohProduct{
    return deserialize(IohProduct, productDto);
  }
  serialize(): string {
    return serialize(this);
  }

  toPlain(): any {
    return classToPlain(this);
  }

}
