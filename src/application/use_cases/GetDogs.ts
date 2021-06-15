import { inject, injectable } from 'tsyringe';
import Dogs from '../../domain/Dogs';
import { DogsRepo } from '../../domain/DogsRepo';

@injectable()
export default class GetDogs {
    
    dogs: Dogs[] 

    constructor(@inject('DogsRepo') private repo: DogsRepo){
        this.dogs = this.repo.getDogs()
    }


}