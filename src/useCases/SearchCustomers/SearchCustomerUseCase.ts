import { ICustomerRepository } from '../../repositories/ICustomersRepository';

export class SearchCustomerUseCase {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute(data: string) {
   return this.customersRepository.search(data);
  }
}
