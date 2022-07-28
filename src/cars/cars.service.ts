import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/cart.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

  private cars: Car[] = [
    { id: uuidv4(), brand: 'Toyota', model: 'Corolla' },
    { id: uuidv4(), brand: 'Honda', model: 'Civic' },
    { id: uuidv4(), brand: 'Ford', model: 'Focus' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);

    if (!car) {
      throw new NotFoundException(`Car with id '${ id }' not found`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuidv4(),
      ...createCarDto
      // brand: createCarDto.brand,
      // model: createCarDto.model,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {

    let carDB = this.findOneById(id);

    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException('Car id is not valid inside body');
    }

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDto,
          id
        };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id)
    this.cars = this.cars.filter(car => car.id !== id);
  }
}
