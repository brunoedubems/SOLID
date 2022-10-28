import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { OrderStatus } from './interfaces/order-status';
import { ShopingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShopingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    //validacao
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido foi  com total de ${this.cart.total()} recebido`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
