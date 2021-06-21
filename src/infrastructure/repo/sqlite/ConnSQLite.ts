import { createConnection } from 'typeorm';
import Dog from './entity/DogEntity';

export default async function SQLiteConn() {
  return createConnection({
    type: 'sqlite',
    database: './data/line.sqlite',
    entities: [
      Dog,
    ],
    synchronize: true,
  });
}
