import DogsModel from "./DogsModel";

export default class Dogs implements DogsModel {
    id: number | undefined;
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }
    setId(id:number) {
        this.id = id;
        return this;
    }

}