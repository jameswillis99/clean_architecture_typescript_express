
import { expect } from "chai";
import Sinon from "sinon";
import { container } from "tsyringe";
import GetDogs from "../../../src/application/use_cases/GetDogs";
import Dogs from "../../../src/domain/DogsEntity";
import DogsRepo from "../../../src/infrastructure/repo/DogsRepo";

describe('ensure dogs return correct data',()=>{
    beforeEach(() => {
        container.register("dogs.repo", {
            useClass: DogsRepo
          });
    })

    afterEach( () => {
        container.reset()
    })
    
    it('should return mocked database data', async function () {
        const expected = [{id: 1,name:'Clifford', age:20}]

        Sinon.stub(DogsRepo.prototype,'getDogs').resolves(expected)
        const getDogs = await container.resolve(GetDogs).execute().then((getDogs) => getDogs.dogs)
    
        expect(getDogs).to.be.equal(expected);
        expect(getDogs.length).to.be.equal(expected.length);
        expect(getDogs[0]).to.have.property('id')
        expect(getDogs[0]).to.have.property('name')
        expect(getDogs[0]).to.have.property('age')
    });
})