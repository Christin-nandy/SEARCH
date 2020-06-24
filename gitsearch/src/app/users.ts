export class Users {
    constructor(
        public name: string,
        public avatar_url: string,
        public followers_url: string,
        public login: string,
        public repos_url: string,
        public following_url: string,
        public repo_url: string,
        public createdAt: Date
    ) {}
}
