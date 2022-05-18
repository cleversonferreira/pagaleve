import { Request, Response } from 'express';
import { SearchCustomerUseCase } from './SearchCustomerUseCase';

export class SearchCustomerController {
  constructor(private searchCustomerUseCase: SearchCustomerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = JSON.stringify(req.query);

      const customers = await this.searchCustomerUseCase.execute(data);

      return res.status(200).send(customers);
    } catch (err: any) {
      return res.status(400).json(err.message);
    }
  }
}
