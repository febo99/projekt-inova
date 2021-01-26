export interface Intervetion{
    name:string|string[];
    location:string|string[];
    leader:string|string[];
    completed:boolean;
};;
export interface StoreInterface{
    interventions:Intervetion[],
    addIntervention:Function
};;
