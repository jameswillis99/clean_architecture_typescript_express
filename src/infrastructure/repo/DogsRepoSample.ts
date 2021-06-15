
import { DogsRepo } from "../../domain/DogsRepo";

export default class DogsRepoSample implements DogsRepo {

    constructor(){

    }
    getDogs(){
        return [{name:'hi', age:10}]
    }
}
