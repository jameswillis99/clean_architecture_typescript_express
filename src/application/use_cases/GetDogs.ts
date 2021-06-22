import { inject, injectable } from 'tsyringe';
import Dogs from '../../domain/IDogs';
import { DogsRepo } from '../../domain/DogsRepo';

@injectable()
export default class GetDogs {
  dogs!: Dogs[];

  constructor(@inject('dogs.repo') private repo: DogsRepo) { }

  async execute() {
    this.dogs = await this.repo.getDogs();
    return this;
  }
}
