export class Clients{
    static id = 0;
    nameclient;
    _socialSecurityId;
    cellphone;
    email;
    birthday;
    driveslicense;
    isblocked;

    get socialSecurityId(){
        return this._socialSecurityId;
    }

    constructor(nameclient, socialSecurityId, cellphone, email, birthday, driveslicense, isblocked){
        this.name = nameclient;
        this._socialSecurityId = socialSecurityId;
        this.cellphone = cellphone;
        this.email = email;
        this.birthday = birthday;
        this.driveslicense = driveslicense;
        this.isblocked = isblocked;
        Clients.id += 1;
    }


}