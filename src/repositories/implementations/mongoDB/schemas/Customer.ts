import { Schema, model } from 'mongoose';
import { ICustomer } from '../../../../entities/Customer';

const customerSchema = new Schema<ICustomer>({
  _id: {type: String, required: true},
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { _id : false });

const Customer = model<ICustomer>('Customer', customerSchema);

export { Customer }
