import React from 'react';
import './App.css';
// import Intervention from './interfaces';
import {observer} from 'mobx-react-lite';
import StoreProvider from './StoreProvider';
import ObservableInterventionsList from './components/ObservableInterventionsList/ObservableInterventionsList';
import InterventionForm from './components/InterventionForm/InterventionForm';
import InfoHeader from './components/InfoHeader/InfoHeader';
// import {observable} from 'mobx';
// import {useState} from 'react';


const App = observer(() => {
  return (
    <StoreProvider>
      <InfoHeader></InfoHeader>
      <ObservableInterventionsList></ObservableInterventionsList>
      <InterventionForm></InterventionForm>
    </StoreProvider>
  );
});

export default App;
