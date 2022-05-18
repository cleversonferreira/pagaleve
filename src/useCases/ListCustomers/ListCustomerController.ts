import { Request, Response } from 'express';
import { ListCustomerUseCase } from './ListCustomerUseCase';

export class ListCustomerController {
  constructor(private listCustomerUseCase: ListCustomerUseCase) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const customers = await this.listCustomerUseCase.execute();

      return res.status(200).send(customers);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}
