import { Connection, getConnection } from 'typeorm';
import DogsModel from '../../domain/IDogs';
import { DogsRepo } from '../../domain/DogsRepo';
import Dog from './sqlite/entity/DogEntity';

/**
 * Facade Design Pattern
 */
export default class DogsRepoSample implements DogsRepo {
  private connection!: Connection;

  async getDogs() {
    this.connection = getConnection();
    return this.connection.getRepository(Dog).createQueryBuilder('dog').getMany();
  }

  async postDogs(dogs: DogsModel[]) {
    this.connection = getConnection();
    await this.connection.createQueryBuilder().insert().into(Dog).values(dogs)
      .execute();
  }
}
