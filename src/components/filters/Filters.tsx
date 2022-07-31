import React from 'react';
import { FilterConfig, FilterKind } from './FiltersData';

interface SearchFilterViewProps {
  readonly name: string;
}

const SearchFilterView: React.FC<SearchFilterViewProps> = ({ name }) => (
  <div className="search-filter">
    <span>{name}</span>
    <input type="search" />
  </div>
);

interface TextFilterViewProps {
  readonly name: string;
}

const TextFilterView: React.FC<TextFilterViewProps> = ({ name }) => (
  <div className="text-filter">
    <span>{name}</span>
    <input type="text" />
  </div>
);

interface BoolFilterViewProps {
  readonly name: string;
}

const BoolFilterView: React.FC<BoolFilterViewProps> = ({ name }) => (
  <div className="bool-filter">
    <span>{name}</span>
    <input type="checkbox" />
  </div>
);

interface FilterViewProps {
  readonly filter: FilterConfig;
}

const FilterView: React.FC<FilterViewProps> = ({ filter }) => {
  switch (filter.kind) {
    case FilterKind.SEARCH:
      return <SearchFilterView name={filter.name} />;
    case FilterKind.TEXT:
      return <TextFilterView name={filter.name} />;
    case FilterKind.BOOL:
      return <BoolFilterView name={filter.name} />;
    default:
      throw new Error('Unknown filter kind');
  }
};

export interface FiltersProps {
  readonly filters: readonly FilterConfig[];
}

export const Filters: React.FC<FiltersProps> = ({ filters }) => (
  <div className="filters">
    {filters.map((filter) => (
      <FilterView key={filter.name} filter={filter} />
    ))}
  </div>
);
