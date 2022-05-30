import { Request, Response } from 'express';
import { CreateCustomerUseCase } from './CreateCustomerUseCase';
const logger = require('../../logger');

export class CreateCustomerController {
  constructor(private createCustomerUseCase: CreateCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      const customer = await this.createCustomerUseCase.execute({
        name,
        email,
        password,
      });

      logger.info('customer created with success');
      return res.status(201).send(customer);
    } catch (err) {
      logger.error(err);
      return res.status(400).json(err.message);
    }
  }
}
