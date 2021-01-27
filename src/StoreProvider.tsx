import * as React from 'react';
import {useLocalStore} from 'mobx-react-lite';
import {Intervention, IStoreProvider} from './interfaces';
import InterventionsContext from './InterventionsContext';
import PropTypes from 'prop-types';

const StoreProvider:React.FC<IStoreProvider> = (props) =>{
  const store = useLocalStore(() => ({
    interventions: [] as Intervention[],
    addIntervention: (intervention:Intervention) =>{
      store.interventions.push(intervention);
    },
    completeIntervention: (intervention:Intervention) => {
      intervention.completed = !intervention.completed;
    },
    get numberOfActiveInterventions() {
      return store.interventions.filter((item) => !item.completed).length;
    },
    get numberOfCompletedInterventions() {
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
