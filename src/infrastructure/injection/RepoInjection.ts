import { container } from 'tsyringe';
import DogsRepo from '../repo/DogsRepo';

const RepoInjection = () => {
  container.register('dogs.repo', {
    useClass: DogsRepo,
  });
};

export default RepoInjection;
