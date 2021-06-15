import { container } from "tsyringe";
import GetDogs from "../../application/use_cases/GetDogs";
import DogsModel from "../../domain/DogsModel";
import Controller, { ControllerRequest } from "./Controller";

export default class DogsController implements Controller<DogsModel> {

    public get(_body:ControllerRequest) {
        return container.resolve(GetDogs).dogs
    }

    
}