import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey : '18cbce9f7b5146fe825b79e04aefeb9d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
