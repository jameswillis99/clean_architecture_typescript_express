import Dogs from "./DogsModel";

export interface DogsRepo {
    postDogs(dogs: Dogs[]): Promise<void>;
    getDogs(): Promise<Dogs[]>;
}
