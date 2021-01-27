import * as React from 'react';
import {useLocalObservable} from 'mobx-react-lite';
import {Intervention, IStoreProvider, StoreInterface} from './interfaces';
import InterventionsContext from './InterventionsContext';
import PropTypes from 'prop-types';

const StoreProvider:React.FC<IStoreProvider> = (props) =>{
  const store:StoreInterface|null = useLocalObservable(() => ({
    interventions: [] as Intervention[],
    addIntervention: (intervention:Intervention) =>{
      if (!store) return;
      store.interventions.push(intervention);
    },
    completeIntervention: (intervention:Intervention) => {
      intervention.completed = !intervention.completed;
    },
    get numberOfActiveInterventions() {
      if (!store) return 0;
      return store.interventions.filter((item) => !item.completed).length;
    },
    get numberOfCompletedInterventions() {
      if (!store) return 0;
      return store.interventions.filter((item) => item.completed).length;
    },
  }));
  store.addIntervention({name: 'Testna zadeva', location: 'Malecnik', leader: 'Lah Ziga', completed: false});
  return (
    <InterventionsContext.Provider value={store}>{props.children}</InterventionsContext.Provider>
  );
};

StoreProvider.propTypes ={
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
