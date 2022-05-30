import { Request, Response } from 'express';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';
const logger = require('../../logger');

export class UpdateCustomerController {
  constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { uuid } = req.params;
      const customer = await this.updateCustomerUseCase.execute(uuid, req.body);

      logger.info('customer updated with success');
      return res.status(200).send(customer);
    } catch (err: any) {
      logger.error(err);
      return res.status(400).json(err.message);
    }
  }
}
