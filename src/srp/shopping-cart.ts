type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';
export class ShopingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido foi  com total de ${this.total()} recebido`);
    this.saveOrder();
    this.clear();
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem Enviada :', msg);
  }

  saveOrder(): void {
    console.log('Seu pedido foi salvo com sucesso');
  }

  clear(): void {
    console.log('Carrinho de Compra Limpo');
    this._items.length = 0;
  }
}

const shopingCart = new ShopingCart();
shopingCart.addItem({ name: 'camiseta', price: 49.99 });
shopingCart.addItem({ name: 'caderno', price: 9.99 });
shopingCart.addItem({ name: 'lapis', price: 1.59 });
shopingCart.addItem({ name: 'agua', price: 2.55 });

console.log(shopingCart.items);
console.log(shopingCart.total());
shopingCart.checkout();
