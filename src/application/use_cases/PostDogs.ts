import { inject, injectable } from 'tsyringe';
import Dogs from '../../domain/DogsModel';
import { DogsRepo } from '../../domain/DogsRepo';

@injectable()
export default class PostDogs {
  dogs: Dogs[] | undefined;

  constructor(@inject('dogs.repo') private repo: DogsRepo) { }

  setDogs = (dogs: Dogs[]) => {
    this.dogs = dogs;
    console.log('dogs postdogs', dogs);
    return this;
  };

  execute = async () => {
    if (this.dogs === undefined) {
      throw new Error('Dogs are undefined');
    }
    await this.repo.postDogs(this.dogs);
  };
}
