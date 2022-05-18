import { ICustomerRepository } from '../../ICustomersRepository';
import { ICustomer } from '../../../entities/Customer';
import { Customer } from './schemas/Customer';
import { uuid } from 'uuidv4';

export class MongoCustomersRepository implements ICustomerRepository {

  async findByEmail(email: string): Promise<ICustomer|null> {
    const existCustomer = await Customer.findOne({email: email}).exec();
    return existCustomer;
  }

  async save(customer: ICustomer): Promise<ICustomer> {

    const newCustomer = new Customer({
      _id: uuid(),
      name: customer.name,
      email: customer.email,
      password: customer.password
    });

    return newCustomer.save();
  }

  async list(): Promise<ICustomer[]> {
    return Customer.find();
  }

  async search(data: string): Promise<ICustomer[]> {
    const params = JSON.parse(data);
    return Customer.find(params);
  }

  async update(uuid: string, data: ICustomer): Promise<ICustomer | null> {
    const updatedCustomer = await Customer.findOneAndUpdate({_id: uuid}, data, {returnDocument: 'after'});
    return updatedCustomer;
  }

  async delete(uuid: string): Promise<any> {
    return Customer.findByIdAndDelete(uuid);
  }
}
