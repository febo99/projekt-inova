import { AppBar, Toolbar, Box } from '@material-ui/core';
import { Observer } from 'mobx-react-lite';
import * as React from 'react';
import InterventionsContext from '../../contexts/InterventionsContext';
import { H3 } from '../../styles/Styles';

interface IInfoHeaderProps {}

const InfoHeader: React.FC<IInfoHeaderProps> = () => {
  const store = React.useContext(InterventionsContext);

  return (
    <Observer>
      {() => (
        <div>
          <AppBar position="relative">
            <Toolbar>
              <h1>Lista intervencij</h1>
            </Toolbar>
          </AppBar>
          <Box display="flex">
            <H3>Vse intervencije: {store?.interventions.length}</H3>
            <H3>Aktivne intervencije: {store?.numberOfActiveInterventions}</H3>
            <H3>
              Koncane intervencije: {store?.numberOfCompletedInterventions}
            </H3>
          </Box>
        </div>
      )}
    </Observer>
  );
};

export default InfoHeader;
