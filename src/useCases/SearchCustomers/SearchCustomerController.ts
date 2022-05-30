import { Request, Response } from 'express';
import { SearchCustomerUseCase } from './SearchCustomerUseCase';
const logger = require('../../logger');

export class SearchCustomerController {
  constructor(private searchCustomerUseCase: SearchCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = JSON.stringify(req.query);

      const customers = await this.searchCustomerUseCase.execute(data);

      logger.info('search customer success');
      return res.status(200).send(customers);
    } catch (err: any) {
      logger.error(err);
      return res.status(400).json(err.message);
    }
  }
}
