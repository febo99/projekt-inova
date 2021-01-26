import {useObserver} from 'mobx-react-lite';
import * as React from 'react';
import InterventionsContext from '../../InterventionsContext';
import {IInfoHeaderProps} from './IInfoHeaderProps';

const InfoHeader: React.SFC<IInfoHeaderProps> = (props) => {
  const store = React.useContext(InterventionsContext);

  return useObserver(() =>(
    <div>
      <h1>Lista intervencij</h1>
      <h3>Aktivne intervencije: {store?.numberOfActiveInterventions}</h3>
      <h3>Koncane intervencije: {store?.numberOfCompletedInterventions}</h3>
    </div>
  ));
};

export default InfoHeader;
