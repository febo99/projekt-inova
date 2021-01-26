import {useObserver} from 'mobx-react-lite';
import * as React from 'react';
import InterventionsContext from '../../InterventionsContext';
import {StoreInterface} from '../../interfaces';
import {IObservableInterventionsListProps} from './IObservableInterventionsListProps';

const ObservableInterventionsList: React.SFC<IObservableInterventionsListProps> = (props) => {
  const store:StoreInterface|null = React.useContext(InterventionsContext);
  return useObserver(() =>(
    <ul>
      {store?.interventions.map((a, i) => (
        <li key={i}>{a.name} {a.location} {a.leader}
          <input type='checkbox' onChange={() => store.completeIntervention(a)}></input></li>
      ))}
    </ul>
  ));
};

export default ObservableInterventionsList;
