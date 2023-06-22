import { SuggestionInterface } from 'interfaces/suggestion';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  type: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  suggestion?: SuggestionInterface[];
  company?: CompanyInterface;
  _count?: {
    suggestion?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  type?: string;
  company_id?: string;
}
