import {Button, TextField} from '@material-ui/core';
import {useObserver} from 'mobx-react-lite';
import * as React from 'react';
import {Intervetion} from '../../interfaces';
import InterventionsContext from '../../InterventionsContext';
import {IInterventionFormProps} from './IInterventionFormProps';
import {FormContainer, Container} from '../../styles';

const InterventionForm: React.SFC<IInterventionFormProps> = (props) => {
  const store = React.useContext(InterventionsContext);
  const [intervention, setIntervention] = React.useState<Intervetion>({name: '', location: '', leader: '', completed: false});

  // vsak kljuc interfaca Intervention extendamo kot P, P pa je parameter, ki ga podamo pri klicu kot prvega v obliki stringa
  // druga vrednost pa nam pove kaksno vrednost bomo nastavili
  // znebimo se redudance
  // pomoc na https://typeofnan.dev/a-react-typescript-change-handler-to-rule-them-all/
  const onInterventionChange = <P extends keyof Intervetion>(prop: P, value: Intervetion[P]) =>{
    setIntervention({...intervention, [prop]: value});
  };

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    if (intervention.name === '' || intervention.location === '' || intervention.leader === '') {
      return;
    }
    store?.addIntervention(intervention);
    setIntervention({name: '', location: '', leader: '', completed: false});
  };

  return useObserver(() => (
    <Container>
      <FormContainer onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
        <TextField className='formInput' id="standard-basic"
          type='text'
          label='Naziv'
          error = {intervention.name === ''}
          value={intervention.name}
          onChange={(e) => onInterventionChange('name', e.target.value)}></TextField>
        <TextField className='formInput' id="standard-basic"
          type='text'
          error = {intervention.location === ''}
          label='Lokacija'
          value={intervention.location}
          onChange={(e) => onInterventionChange('location', e.target.value)}></TextField>
        <TextField className='formInput' id="standard-basic"
          type='text'
          error = {intervention.leader === ''}
          label='Vodja'
          value={intervention.leader}
          onChange={(e) => onInterventionChange('leader', e.target.value)}></TextField>
        <Button className='formInput' variant="contained" color="primary" type='submit' >Dodaj</Button>
      </FormContainer>
    </Container>
  ));
};

export default InterventionForm;
