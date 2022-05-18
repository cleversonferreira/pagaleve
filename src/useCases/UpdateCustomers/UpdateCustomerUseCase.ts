import { ICustomer } from '../../entities/Customer';
import { ICustomerRepository } from '../../repositories/ICustomersRepository';

export class UpdateCustomerUseCase {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute(uuid: string, data: ICustomer) {
   return this.customersRepository.update(uuid, data);
  }
}
