import React from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import StoreProvider from './providers/StoreProvider';
import ObservableInterventionsList from './components/ObservableInterventionsList/ObservableInterventionsList';
import InterventionForm from './components/InterventionForm/InterventionForm';
import InfoHeader from './components/InfoHeader/InfoHeader';

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
