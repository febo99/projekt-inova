import * as React from 'react';
import InterventionsContext from '../contexts/InterventionsContext';
import PropTypes from 'prop-types';
import { useLocalObservable } from 'mobx-react-lite';
import { Intervention, StoreInterface } from '../interfaces/Interfaces';

interface IStoreProvider {}

const StoreProvider: React.FC<IStoreProvider> = (props) => {
  const store: StoreInterface = useLocalObservable<StoreInterface>(() => ({
    interventions: [] as Intervention[],
    addIntervention: (intervention: Intervention) => {
      store.interventions.push(intervention);
    },
    completeIntervention: (intervention: Intervention) => {
      intervention.completed = !intervention.completed;
    },
    removeIntervention: (intervention: Intervention) => {
      const index: number = store.interventions.indexOf(intervention, 0);
      if (index > -1) {
        store.interventions.splice(index, 1);
      }
    },
    get numberOfActiveInterventions() {
      return store.interventions.filter((item) => !item.completed).length;
    },
    get numberOfCompletedInterventions() {
      return store.interventions.filter((item) => item.completed).length;
    },
  }));

  store.addIntervention({
    name: 'Testna zadeva',
    location: 'Malecnik',
    leader: 'Lah Ziga',
    completed: false,
  });

  return (
    <InterventionsContext.Provider value={store}>
      {props.children}
    </InterventionsContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
