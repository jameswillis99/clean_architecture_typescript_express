import { Connection, getConnection } from 'typeorm';
import DogsModel from '../../domain/DogsModel';
import { DogsRepo } from '../../domain/DogsRepo';
import Dog from './sqlite/entity/DogEntity';

export default class DogsRepoSample implements DogsRepo {
  private connection: Connection;

  constructor() {
    this.connection = getConnection();
  }

  async getDogs() {
    return this.connection.getRepository(Dog).createQueryBuilder('dog').getMany();
  }

  async postDogs(dogs: DogsModel[]) {
    await this.connection.createQueryBuilder().insert().into(Dog).values(dogs)
      .execute();
  }
}
