import { Intervention, StoreInterface } from '../interfaces/Interfaces';

const Store = (): StoreInterface => ({
  interventions: [] as Intervention[],
  get numberOfActiveInterventions() {
    return this.interventions.filter((item) => !item.completed).length;
  },
  get numberOfCompletedInterventions() {
    return this.interventions.filter((item) => item.completed).length;
  },
  addIntervention(intervention: Intervention) {
    this.interventions.push(intervention);
  },
  completeIntervention(intervention: Intervention) {
    intervention.completed = !intervention.completed;
  },
  removeIntervention(intervention: Intervention) {
    const index: number = this.interventions.indexOf(intervention, 0);
    if (index > -1) {
      this.interventions.splice(index, 1);
    }
  },
});

export default Store;
