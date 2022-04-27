import {classToPlain, deserialize, Exclude, Expose, Type, serialize} from 'class-transformer';
import {IohImage} from '../image/ioh-image';

export class IohProduct{
  @Expose({name: 'id'})
  productId: number | undefined;

  @Expose({name: 'name'})
  productName: string | undefined;

  @Expose({name: 'price'})
  productPrice: string | undefined;

  @Expose({name: 'status'})
  productStatus: string | undefined;

  @Expose({name: 'discount'})
  productDiscount: string | undefined;

  @Expose({name: 'images'})
  @Type(() => IohImage)
  productImages: IohImage[] | undefined;

  @Expose({name: 'created_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  createAt?: Date;

  @Expose({name: 'updated_at'})
  @Exclude({toPlainOnly: true})
  @Type(() => Date)
  updateAt?: Date;

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
