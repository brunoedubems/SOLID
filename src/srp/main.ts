import { ShopingCart } from './entities/shopping-cart';
import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';

const shopingCart = new ShopingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shopingCart, messaging, persistency);

shopingCart.addItem(new Product('camiseta', 49.99));
shopingCart.addItem(new Product('caderno', 9.99));
shopingCart.addItem(new Product('lapis', 1.59));
shopingCart.addItem(new Product('agua', 2.55));

console.log(shopingCart.items);
console.log(shopingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
