export class UserModel{
    
    userName:string;
    password:string;
    isAdmin: boolean;
  static isAdmin: boolean;
  static userName: string;

    constructor(){
        this.userName ='';
        this.password = '';
        this.isAdmin =false;
    }
}


    