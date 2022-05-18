import { ICustomer } from '../entities/Customer';

export interface ICustomerRepository {
  findByEmail(email: string): Promise<ICustomer | null>;
  save(customer: ICustomer): Promise<ICustomer>;
  list(): Promise<ICustomer[]>;
  search(data: string): Promise<ICustomer[]>;
  update(uuid: string, data: ICustomer): Promise<ICustomer | null>;
  delete(uuid: string): Promise<any>;
}
