import { container } from "tsyringe";
import GetDogs from "../../application/use_cases/GetDogs";
import PostDogs from "../../application/use_cases/PostDogs";
import Dogs from "../../domain/DogsEntity";
import DogsModel from "../../domain/DogsModel";
import Controller, { ControllerRequest } from "./Controller";



export default class DogsController extends Controller<DogsModel> {

    constructor(){
        super();
    }
    
    public async get(_body:ControllerRequest) {
        this.data =  await container.resolve(GetDogs).execute().then((getDogs) => getDogs.dogs)
    } 

    public async post(req:ControllerRequest) {
        const body = [...req.body]
        await container.resolve(PostDogs).setDogs(body).execute();
    }
    
}