import {AxiosRequestConfig} from 'axios';

export interface QueryRequest<Type> {
  type: Type;
  payload: {
    request: AxiosRequestConfig;
  };
}

export interface SuccessResponse<Type, Data> {
  type: Type;
  payload: {
    data: Data;
  };
  meta: any;
}

export interface FailureResponse<Type> {
  type: Type;
  error: {
    response: {
      data: string;
      status: number;
    };
  };
  meta: any;
}

  