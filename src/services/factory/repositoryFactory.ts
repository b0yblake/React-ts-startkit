import AuthRepository from "../repository/authRepository";
import PostRepository from "../repository/postRepository";
// import ListEmailTempRepository from "@/api/repository/listEmailTempRepository.js.off";

const repositories = {
  auth: AuthRepository,
  posts: PostRepository,
};

const RepositoryFactory = {
  get: (name: string) => repositories[name],
};

export default RepositoryFactory;
