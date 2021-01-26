import * as React from 'react';
import {useLocalStore} from 'mobx-react-lite';
import {Intervetion} from './interfaces';
import InterventionsContext from './InterventionsContext';


const StoreProvider = (children:any) =>{
  const store = useLocalStore(() => ({
    interventions: [] as Intervetion[],
    addIntervention: (intervention:Intervetion) =>{
      store.interventions.push(intervention);
    },
    completeIntervention: (intervention:Intervetion) => {
      intervention.completed = !intervention.completed;
    },
    get numberOfActiveInterventions() {
      return store.interventions.filter((item) => !item.completed).length;
    },
    get numberOfCompletedInterventions() {
      return store.interventions.filter((item) => item.completed).length;
    },
  }));
  store.addIntervention({name: 'Test', location: 'Test', leader: 'Leader', completed: false});
  return (
    <InterventionsContext.Provider value={store}>{children.children}</InterventionsContext.Provider>
  );
};
export default StoreProvider;
