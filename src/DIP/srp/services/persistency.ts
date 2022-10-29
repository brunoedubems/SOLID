import { PersistencyProtocol } from '../classes/interfaces/persistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Seu pedido foi salvo com sucesso');
  }
}
