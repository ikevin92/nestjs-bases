import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    // {
    //   id: uuidv4(),
    //   name: 'Toyota',
    //   createdAt: new Date().getTime()
    // }
  ];

  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuidv4(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`Brand with id ${ id } not found`);
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands
      .map(brand => {
        if (brand.id === id) {
          brandDB = {
            ...brandDB,
            ...updateBrandDto,
            updatedAt: new Date().getTime()
          };
          return brandDB;
        }
        return brand;
      });
    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id);
  }

  fillBrandsWithSeedData(cars: Brand[]) {
    this.brands = cars;
  }
}
