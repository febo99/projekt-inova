import { action, computed, makeObservable, observable } from "mobx"
import { Intervention } from "../interfaces/Interfaces"

/**
 * A class for Store
 */
export default class Store {
    /**
     * Constructor - make object observable
     */
    constructor() {
        makeObservable(this, {
            interventions: observable,
            numberOfActiveInterventions: computed,
            numberOfCompletedInterventions: computed,
            addIntervention: action,
            completeIntervention: action,
            removeIntervention: action,
        })
    }
    interventions = [] as Intervention[]
    /** Return number of interventions with completed == false */
    get numberOfActiveInterventions() {
        return this.interventions.filter((item) => !item.completed).length
    }
    /** Return number o interventions with completed == true */
    get numberOfCompletedInterventions() {
        return this.interventions.filter((item) => item.completed).length
    }
    /**
     * Push items to interventions array
     * @param {Intervention} intervention
     *
     */
    addIntervention(intervention: Intervention) {
        this.interventions.push(intervention)
    }
    /**
     * Set interventions state to inverse of current one
     * @param {Intervention} intervention
     * */
    completeIntervention(intervention: Intervention) {
        intervention.completed = !intervention.completed
    }
    /** Remove clicked intervention
     * @param {Intervention} intervention
     */
    removeIntervention(intervention: Intervention) {
        const index: number = this.interventions!.indexOf(intervention, 0)
        if (index > -1) {
            this.interventions.splice(index, 1)
        }
    }
}
