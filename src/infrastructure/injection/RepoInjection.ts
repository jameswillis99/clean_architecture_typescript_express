import { container } from "tsyringe";
import DogsRepoSample from "../repo/DogsRepoSample";

 const RepoInjection = ( )=> {
    container.register("DogsRepo", {
        useClass: DogsRepoSample
      });
}

export default RepoInjection