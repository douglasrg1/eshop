export class UserModel{
    constructor(
        public email: string,
        public image: string,
        public name: string,
        public token: string,
        public roles: string[],
        public username: string
    ){}
}