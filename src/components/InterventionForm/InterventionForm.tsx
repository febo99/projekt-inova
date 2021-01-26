import {useObserver} from 'mobx-react-lite';
import * as React from 'react';
import {Intervetion} from '../../interfaces';
import InterventionsContext from '../../InterventionsContext';
import {IInterventionFormProps} from './IInterventionFormProps';

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

  const handleSubmit = (e:any) =>{
    e.preventDefault();

    if (intervention.name === '' || intervention.location === '' || intervention.leader === '') {
      return;
    }
    store?.addIntervention(intervention);
    setIntervention({name: '', location: '', leader: '', completed: false});
  };

  return useObserver(() => (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text'
          placeholder='Naziv'
          value={intervention.name}
          onChange={(e) => onInterventionChange('name', e.target.value)}></input>
        <input
          type='text' placeholder='Lokacija'
          value={intervention.location}
          onChange={(e) => onInterventionChange('location', e.target.value)}></input>
        <input type='text'
          placeholder='Vodja'
          value={intervention.leader}
          onChange={(e) => onInterventionChange('leader', e.target.value)}></input>
        <button type='submit' >Dodaj</button>
      </form>
    </div>
  ));
};

export default InterventionForm;
