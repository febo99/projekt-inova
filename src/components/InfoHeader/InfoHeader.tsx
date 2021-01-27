import {Observer} from 'mobx-react-lite';
import * as React from 'react';
import InterventionsContext from '../../InterventionsContext';
import {Container, HeaderDiv, Information} from '../../styles';
import {IInfoHeaderProps} from './IInfoHeaderProps';

const InfoHeader: React.SFC<IInfoHeaderProps> = (props) => {
  const store = React.useContext(InterventionsContext);

  return (
    <Observer>
      {() =>(
        <Container>
          <HeaderDiv>
            <h1>Lista intervencij</h1>
          </HeaderDiv>
          <Information>
            <h3>Aktivne intervencije: {store?.numberOfActiveInterventions}</h3>
            <h3>Koncane intervencije: {store?.numberOfCompletedInterventions}</h3>
          </Information>
        </Container>
      )}
    </Observer>
  );
};

export default InfoHeader;
