export  class UserPostService{

    url1 = 'https://jsonplaceholder.typicode.com/posts';

    getAllUserPostServise(){
        return fetch(this.url1)
        .then(value => value.json())
        .then(value => {return value;});
    }
}

export default UserPostService;


















