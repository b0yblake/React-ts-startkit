export interface urlInterface {
  BASE_URL: string;
}

export interface ErrorInterface {
  error: string;
  isSuccess: boolean;
  invalidParams: any[];
  detail: string;
}

export interface ProjectList {
  count: number;
  offset: number;
  limit: number;
}

export interface ProjectListInterface extends ProjectList, ErrorInterface {}
