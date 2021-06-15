
import chai , { expect } from "chai";
import Sinon from "sinon";
import { container } from "tsyringe";
import PostDogs from "../../../src/application/use_cases/PostDogs";
import DogsRepo from "../../../src/infrastructure/repo/DogsRepo";
import chaiAsPromised from 'chai-as-promised';
 
chai.use(chaiAsPromised);

describe('Insert a new dog',()=>{
    beforeEach(() => {
        Sinon.restore();
        container.clearInstances();

        container.register("dogs.repo", {
            useClass: DogsRepo
          });
    })

    it('should return mocked database data', async function () {
        const expected = [{id: 1,name:'Clifford', age:20}]

        const spy = Sinon.stub(DogsRepo.prototype,'postDogs').callsFake(async ()=>{})
        const response = await container.resolve(PostDogs).setDogs(expected).execute();
        expect(spy.called).to.be.true;
        expect(response).to.be.undefined;
    });

    it('should throw error when dogs is not set', async function () {
        const spy = Sinon.spy(DogsRepo.prototype,'postDogs');
        const postDogs = container.resolve(PostDogs);
        await expect(postDogs.execute()).to.be.rejectedWith('Dogs are undefined');
        expect(spy.called).to.be.false;
    });
})