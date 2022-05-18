import { ICustomerRepository } from '../../repositories/ICustomersRepository';

export class DeleteCustomerUseCase {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute(uuid: string) {
   return this.customersRepository.delete(uuid);
  }
}
