import Dogs from "./Dogs";

export interface DogsRepo {
    getDogs(): Dogs[];
}
