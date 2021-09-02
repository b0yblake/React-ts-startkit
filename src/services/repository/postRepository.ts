import Repository from "../core";

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/posts`;

const postRepository = {
  get: (params: any) => {
    return Repository(BASE_URL).get(params);
  },
  getPost: (id: string) => {
    return Repository(BASE_URL).getOne(id);
  },
};

export default postRepository;
