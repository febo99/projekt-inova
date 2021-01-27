import { Button, TextField } from '@material-ui/core';
import { Observer } from 'mobx-react-lite';
import * as React from 'react';
import { Intervention } from '../../interfaces/Interfaces';
import InterventionsContext from '../../contexts/InterventionsContext';
import { FormContainer, Container } from '../../styles/Styles';

interface IInterventionFormProps { }

const InterventionForm: React.FC<IInterventionFormProps> = () => {
  const store = React.useContext(InterventionsContext);
  const [intervention, setIntervention] = React.useState<Intervention>({
    name: '',
    location: '',
    leader: '',
    completed: false,
  });
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  // help https://typeofnan.dev/a-react-typescript-change-handler-to-rule-them-all/
  const onInterventionChange = <P extends keyof Intervention>(
    prop: P,
    value: Intervention[P],
  ) => {
    setIntervention({ ...intervention, [prop]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      intervention.name === '' ||
      intervention.location === '' ||
      intervention.leader === ''
    ) {
      setSubmitted(true);
      return;
    }
    store?.addIntervention(intervention);
    setSubmitted(false);
    setIntervention({ name: '', location: '', leader: '', completed: false });
  };

  return (
    <Observer>
      {() => (
        <Container>
          <FormContainer onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
            <TextField
              className="formInput"
              id="standard-basic"
              type="text"
              label="Naziv"
              error={intervention.name === '' && submitted}
              value={intervention.name}
              onChange={(e) => onInterventionChange('name', e.target.value)}
            ></TextField>
            <TextField
              className="formInput"
              id="standard-basic"
              type="text"
              error={intervention.location === '' && submitted}
              label="Lokacija"
              value={intervention.location}
              onChange={(e) => onInterventionChange('location', e.target.value)}
            ></TextField>
            <TextField
              className="formInput"
              id="standard-basic"
              type="text"
              error={intervention.leader === '' && submitted}
              label="Vodja"
              value={intervention.leader}
              onChange={(e) => onInterventionChange('leader', e.target.value)}
            ></TextField>
            <Button
              className="formInput"
              variant="contained"
              color="primary"
              type="submit"
            >
              Dodaj
            </Button>
          </FormContainer>
        </Container>
      )}
    </Observer>
  );
};

export default InterventionForm;
