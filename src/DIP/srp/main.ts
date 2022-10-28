import { ShopingCart } from './classes/shopping-cart';
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shopingCart = new ShopingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'BRUNO',
  'EDUARDO',
  '111.111.111-11',
);
/*const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa de bruno',
  '2222222',
);*/
const order = new Order(
  shopingCart,
  messaging,
  persistency,
  individualCustomer,
);

shopingCart.addItem(new Product('camiseta', 49.99));
shopingCart.addItem(new Product('caderno', 9.99));
shopingCart.addItem(new Product('lapis', 1.59));
shopingCart.addItem(new Product('agua', 2.55));

console.log(shopingCart.items);
console.log(shopingCart.total());
console.log(shopingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
