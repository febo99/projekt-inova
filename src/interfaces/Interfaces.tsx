export interface Intervention {
    name: string | string[]
    location: string | string[]
    leader: string | string[]
    completed: boolean
}

export interface StoreInterface {
    interventions: Intervention[]
    addIntervention: Function
    completeIntervention: Function
    removeIntervention: Function
    numberOfActiveInterventions: Number
    numberOfCompletedInterventions: Number
}
