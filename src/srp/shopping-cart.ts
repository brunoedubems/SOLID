type CartItem = { name: string; price: number };
export class ShopingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shopingCart = new ShopingCart();
shopingCart.addItem({ name: 'camiseta', price: 49.99 });
shopingCart.addItem({ name: 'caderno', price: 9.99 });
shopingCart.addItem({ name: 'lapis', price: 1.59 });
shopingCart.addItem({ name: 'agua', price: 2.55 });
