import { Request, Response } from 'express';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';
const logger = require('../../logger');

export class DeleteCustomerController {
  constructor(private deleteCustomerUseCase: DeleteCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customers = await this.deleteCustomerUseCase.execute(req.params.uuid);

      logger.info('customer deleted with success');
      return res.status(200).send(customers);
    } catch (err: any) {
      logger.error(err);
      return res.status(400).json(err.message);
    }
  }
}
