enum NewsType {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}

export interface NewsRequestDto{
  type: NewsType,
  content: string,
  isImportant: boolean,
  endTime: string,
  important: boolean
}

export interface NewsDto extends NewsRequestDto{
  id: number
}
