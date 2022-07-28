import { Car } from 'src/cars/interfaces/cart.interface';
import { v4 as uuidv4 } from 'uuid';


export const CARS_SEED: Car[] = [
  {
    id: uuidv4(),
    brand: 'BMW',
    model: 'X5',
  },
  {
    id: uuidv4(),
    brand: 'Kia',
    model: 'Picanto',
  },
  {
    id: uuidv4(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuidv4(),
    brand: 'Volskwagen',
    model: 'Golf',
  }
];