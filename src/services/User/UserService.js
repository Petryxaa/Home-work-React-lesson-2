///ехспортуємо клас AllUsers.js
export class UserService{
url0 = 'https://jsonplaceholder.typicode.com/users';

//////
    getAllUsers() {
        return fetch (this.url0)
        .then(value => value.json())
        .then(value => {return value;});
    }

}
export default UserService;