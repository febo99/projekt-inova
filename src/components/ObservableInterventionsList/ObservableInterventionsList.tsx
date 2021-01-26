import {useObserver} from 'mobx-react-lite';
import * as React from 'react';
import InterventionsContext from '../../InterventionsContext';
import {StoreInterface} from '../../interfaces';
import {IObservableInterventionsListProps} from './IObservableInterventionsListProps';
import {Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

const ObservableInterventionsList: React.SFC<IObservableInterventionsListProps> = (props) => {
  const store:StoreInterface|null = React.useContext(InterventionsContext);
  return useObserver(() =>(
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableCell>Naziv</TableCell>
          <TableCell>Lokacija</TableCell>
          <TableCell>Vodja intervencije</TableCell>
          <TableCell>Stanje</TableCell>
        </TableHead>

        <TableBody>
          {store?.interventions.map((intervention, idx) =>(
            <TableRow key={idx}>
              <TableCell >{intervention.name}</TableCell>
              <TableCell >{intervention.location}</TableCell>
              <TableCell >{intervention.leader}</TableCell>
              <TableCell>
                <Checkbox color='primary' onChange={() => store.completeIntervention(intervention)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ));
};

export default ObservableInterventionsList;
