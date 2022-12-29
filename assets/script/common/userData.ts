export class userData {
    public _id = undefined
    public _nickName = undefined
    public _houseCardCount = undefined
    static _instance: userData
    constructor() {
        
    }
    static getInstance() {
        let instance = null
        if(userData._instance) {
            return this._instance;
        }
        this._instance = new userData()
        return this._instance
    }
}