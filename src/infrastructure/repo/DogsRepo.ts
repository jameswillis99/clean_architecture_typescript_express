
import { getConnection } from "typeorm";
import DogsModel from "../../domain/DogsModel";
import { DogsRepo } from "../../domain/DogsRepo";
import { Dog } from "./sqlite/entity/DogEntity";

export default class DogsRepoSample implements DogsRepo {

    constructor(){
    }
    
    async getDogs(){
        const connection = getConnection();
        return connection.getRepository(Dog).createQueryBuilder('dog').getMany();
    }
    async postDogs(dogs: DogsModel[]){
        const connection = getConnection();
        await connection.createQueryBuilder().insert().into(Dog).values(dogs).execute();
    }
}
