import React from 'react';
import './App.css';
// import Intervention from './interfaces';
import {observer} from 'mobx-react-lite';
import StoreProvider from './StoreProvider';
import ObservableInterventionsList from './components/ObservableInterventionsList/ObservableInterventionsList';
import InterventionForm from './components/InterventionForm/InterventionForm';
// import {observable} from 'mobx';
// import {useState} from 'react';


const App = observer(() => {
  return (
    <StoreProvider>
      <h1>Lista intervencij</h1>
      <ObservableInterventionsList></ObservableInterventionsList>
      <InterventionForm></InterventionForm>
    </StoreProvider>
  );
});

export default App;
