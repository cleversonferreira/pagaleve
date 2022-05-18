import { Request, Response } from 'express';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

export class DeleteCustomerController {
  constructor(private deleteCustomerUseCase: DeleteCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const customers = await this.deleteCustomerUseCase.execute(req.params.uuid);

      return res.status(200).send(customers);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}
