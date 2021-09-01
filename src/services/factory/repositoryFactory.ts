// import ListEmailTempRepository from "@/api/repository/listEmailTempRepository.js.off";
import AuthRepository from "../repository/authRepository";

const repositories = {
  auth: AuthRepository,
};

const RepositoryFactory = {
  get: (name: string) => repositories[name],
};

export default RepositoryFactory;
