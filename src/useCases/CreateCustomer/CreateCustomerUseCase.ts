import { ICustomerRepository } from '../../repositories/ICustomersRepository';
import { ICreateCustomerRequestDTO } from './CreateCustomerDTO';

export class CreateCustomerUseCase {
  constructor(private customersRepository: ICustomerRepository) {}

  async execute(data: ICreateCustomerRequestDTO) {
    const customerAlreadyExists = await this.customersRepository.findByEmail(
      data.email,
    );

    if (customerAlreadyExists) {
      throw new Error('Customer already exists.');
    }

    return this.customersRepository.save(data);
  }
}
