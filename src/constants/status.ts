export const successStatus = /^2\d{2}$|304/; // 2XX or 304

const statusRequest = {
  successStatus,
};
export default statusRequest;
