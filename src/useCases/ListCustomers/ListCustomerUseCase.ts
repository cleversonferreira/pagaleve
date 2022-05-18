import { ICustomerRepository } from '../../repositories/ICustomersRepository';

export class ListCustomerUseCase {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute() {
   return this.customersRepository.list();
  }
}
