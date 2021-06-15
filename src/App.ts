import 'reflect-metadata';
import RepoInjection from './infrastructure/injection/RepoInjection';
import { Dog } from './infrastructure/repo/sqlite/entity/DogEntity';
import SQLiteConn from './infrastructure/repo/sqlite/SQLiteConn';
import ExpressServer from "./infrastructure/server/express";

try {
    RepoInjection();
    SQLiteConn().then((conn) => {
    conn.createQueryBuilder().insert().into(Dog).values([{name:'Poppy', age: 10}]).execute()

});
    ExpressServer.getInstance().listen();
} catch (e) {
    console.log(e);
    process.exit(1);
}