import chai, { expect } from 'chai';
import Sinon from 'sinon';
import { container } from 'tsyringe';
import chaiAsPromised from 'chai-as-promised';
import PostDogs from '../../../src/application/use_cases/PostDogs';
import DogsRepo from '../../../src/infrastructure/repo/DogsRepo';
import Dogs from '../../../src/domain/DogsEntity';

chai.use(chaiAsPromised);

describe('Insert a new dog', () => {
  beforeEach(() => {
    Sinon.restore();
    container.clearInstances();

    container.register('dogs.repo', {
      useClass: DogsRepo,
    });
  });

  it('should return mocked database data', async () => {
    const expected = [new Dogs('Clifford', 20).setId(1)];

    const spy = Sinon.stub(DogsRepo.prototype, 'postDogs').callsFake(async () => {});
    const response = await container.resolve(PostDogs).setDogs(expected).execute();
    expect(spy.called).to.be.true;
    expect(response).to.be.undefined;
  });

  it('should throw error when dogs is not set', async () => {
    const spy = Sinon.spy(DogsRepo.prototype, 'postDogs');
    const postDogs = container.resolve(PostDogs);
    await expect(postDogs.execute()).to.be.rejectedWith('Dogs are undefined');
    expect(spy.called).to.be.false;
  });
});
