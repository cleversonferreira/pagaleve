import { Request, Response } from 'express';
import { ListCustomerUseCase } from './ListCustomerUseCase';
const logger = require('../../logger');

export class ListCustomerController {
  constructor(private listCustomerUseCase: ListCustomerUseCase) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const customers = await this.listCustomerUseCase.execute();

      logger.info('customers listed with success');
      return res.status(200).send(customers);
    } catch (err: any) {
      logger.error(err);
      return res.status(400).json(err.message);
    }
  }
}
