export interface FilterConfig {
  readonly kind: FilterKind;
  readonly name: string;
}

export enum FilterKind {
  SEARCH = 'SEARCH',
  TEXT = 'TEXT',
  BOOL = 'BOOL',
}

export const MEDICINE_FILTERS_CONFIG: readonly FilterConfig[] = [
  { kind: FilterKind.SEARCH, name: 'Поиск' },
  { kind: FilterKind.TEXT, name: 'Название' },
  { kind: FilterKind.TEXT, name: 'Производитель' },
  { kind: FilterKind.BOOL, name: 'checkbox' },
];
