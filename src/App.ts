import 'reflect-metadata';
import RepoInjection from './infrastructure/injection/RepoInjection';
import SQLiteConn from './infrastructure/repo/sqlite/ConnSQLite';
import ExpressServer from './infrastructure/server/ExpressServer';

RepoInjection();
SQLiteConn();
ExpressServer.getInstance().listen();
