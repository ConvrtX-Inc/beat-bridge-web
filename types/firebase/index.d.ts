declare module 'firebase' {
    import {Response} from 'superagent';
  
    interface GetValidationErrorModelInterface extends Error {
      code: string;
    }
  
    interface ServerErrorModelInterface extends Error {
      code: string;
    }
  
    export const GetValidationErrorModel: GetValidationErrorModelInterface;
  
    export const ServerErrorModel: ServerErrorModelInterface;
  
    export type DeserializeReturnType = {
      code: string;
      message: string;
      errors?: string[];
    };
  
    export class ApiClient {
      basePath: string;
      timeout: number;
  
      deserialize(res: Response, errorModel: Error): DeserializeReturnType;
    }
  
    export type ListAgencyOptionsType = {
      xRequestId?: string;
      page?: number;
      itemsPerPage?: number;
      displayName?: string;
      agencyId?: string;
      sortBy?: string[];
    };
  
    export interface AgencyRecordInterface {
      _id: string;
      updated_at: string;
      created_at: string;
      __v: number;
      agency_id: string;
      display_name: string;
      avatar_url?: string;
    }
    export interface ListAgencyResponseInterface extends Response {
      body: AgencyRecordInterface[];
    }
    export type ListAgencyRequestCallbackType = (
      err: Error | null,
      data: unknown,
      response: ListAgencyResponseInterface
    ) => void;
  
    export class AgencyApi {
      constructor(client: ApiClient);
  
      public listAgenciesMetaData(
        xRequestJwt: string,
        reqOptions: ListAgencyOptionsType,
        cb: ListAgencyRequestCallbackType
      ): void;
    }
  }