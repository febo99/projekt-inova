import { action, makeObservable, observable } from "mobx"
/**
 * A class for UserData
 */
export default class UserData {
    /**
     * Constructor
     */
    constructor() {
        makeObservable(this, {
            token: observable,
            changeToken: action,
        })
    }
    token = "" as string
    /**
     * Change token
     * @param {string} newToken new token
     */
    changeToken(newToken: string) {
        this.token = newToken
    }
}
