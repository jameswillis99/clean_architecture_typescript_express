import Dogs from './IDogs';

export interface DogsRepo {
  postDogs(dogs: Dogs[]): Promise<void>;
  getDogs(): Promise<Dogs[]>;
}
