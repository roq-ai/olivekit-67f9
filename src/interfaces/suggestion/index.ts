import { ServiceInterface } from 'interfaces/service';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SuggestionInterface {
  id?: string;
  content: string;
  status: string;
  service_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  service?: ServiceInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SuggestionGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  status?: string;
  service_id?: string;
  user_id?: string;
}
