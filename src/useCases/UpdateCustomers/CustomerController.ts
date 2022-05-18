import { Request, Response } from 'express';
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase';

export class UpdateCustomerController {
  constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { uuid } = req.params;
      const customer = await this.updateCustomerUseCase.execute(uuid, req.body);

      return res.status(200).send(customer);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}
