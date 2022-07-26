import { WithId } from '../UtilityTypes';

enum News {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}

export interface NewsData{
  type: News,
  content: string,
  isImportant: boolean,
  endTime: string,
  important: boolean

}

export type ManagerNewsResponseDto = WithId<NewsData>;
