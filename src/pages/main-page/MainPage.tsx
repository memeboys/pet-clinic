import React from 'react';
import { MEDICINE_FILTERS_CONFIG } from '../../components/filters/data';
import { Filters } from '../../components/filters/filters';
import Main from '../../components/main/Main';

const MainPage: React.FC = () => (
  <>
    <Filters filters={MEDICINE_FILTERS_CONFIG} />
    <Main />
  </>
);

export default MainPage;
