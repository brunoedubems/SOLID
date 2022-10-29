import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShopingCartProtocol } from './interfaces/shopping-cart-protocol';

export class ShopingCart implements ShopingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}
  items(): readonly CartItem[] {
    throw new Error('Method not implemented.');
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  getitems(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de Compra Limpo');
    this._items.length = 0;
  }
}
