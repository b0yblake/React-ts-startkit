export const REQUEST_STATUS = {
  IDLE: 'IDLE',
  REQUESTING: 'REQUESTING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED_SUCCESS: 201,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const commomStatus = {
  REQUEST_STATUS,
  STATUS_CODE,
};
export default commomStatus;
