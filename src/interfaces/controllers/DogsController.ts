import { container } from 'tsyringe';
import GetDogs from '../../application/use_cases/GetDogs';
import PostDogs from '../../application/use_cases/PostDogs';
import DogsModel from '../../domain/DogsModel';
import Controller, { ControllerRequest } from './Controller';

export default class DogsController extends Controller<DogsModel> {
  public get = async () => {
    this.data = await container.resolve(GetDogs).execute().then((getDogs) => getDogs.dogs);
  };

  public post = async (req:ControllerRequest) => {
    const { body } = req;
    await container.resolve(PostDogs).setDogs(body).execute();
  };
}
