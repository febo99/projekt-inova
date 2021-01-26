import {useObserver} from 'mobx-react-lite';
import * as React from 'react';
import {Intervetion} from '../../interfaces';
import InterventionsContext from '../../InterventionsContext';
import {IInterventionFormProps} from './IInterventionFormProps';

const InterventionForm: React.SFC<IInterventionFormProps> = (props) => {
  const store = React.useContext(InterventionsContext);
  const [intervention, setIntervention] = React.useState<Intervetion>({name: '', location: '', leader: '', completed: false});

  const handleNameChange = (e:React.FormEvent<HTMLInputElement>) =>{
    const newIntervention:Intervetion|null = intervention;
    if (newIntervention === null) return;
    newIntervention.name = e.currentTarget.value;
    setIntervention(newIntervention);
  };

  const handleLocationChange = (e:React.FormEvent<HTMLInputElement>) =>{
    const newIntervention:Intervetion|null = intervention;
    if (newIntervention === null) return;
    newIntervention.location = e.currentTarget.value;
    setIntervention(newIntervention);
  };

  const handleLeaderChange = (e:React.FormEvent<HTMLInputElement>) =>{
    const newIntervention:Intervetion|null = intervention;
    if (newIntervention === null) return;
    newIntervention.leader = e.currentTarget.value;
    setIntervention(newIntervention);
  };

  const handleSubmit = (e:any) =>{
    store?.addIntervention(intervention);
    setIntervention({name: '', location: '', leader: '', completed: false});
    e.preventDefault();
  };

  return useObserver(() => (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='Naziv' defaultValue={intervention.name} onChange={(e) => handleNameChange(e)}></input>
        <input type='text' placeholder='Lokacija' defaultValue={intervention.location} onChange={(e) => handleLocationChange(e)}></input>
        <input type='text' placeholder='Vodja' defaultValue={intervention.leader} onChange={(e) => handleLeaderChange(e)}></input>
        <button type='submit' >Dodaj</button>
      </form>
    </div>
  ));
};

export default InterventionForm;
