import { v4 as uuidv4 } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';


export const BRANDS_SEED: Brand[] = [
  {
    id: uuidv4(),
    name: 'BMW',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Kia',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: uuidv4(),
    name: 'Volskwagen',
    createdAt: new Date().getTime(),
  }
];