import axios from "axios";

class AuthService {
    constructor() {
        this.api = axios.create({
          baseURL: process.env.REACT_APP_API_URL 
        });

        this.api.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('authToken');
       
            if (storedToken) {
              config.headers = { Authorization: `Bearer ${storedToken}` };
            }
       
            return config;
          });
    }

    login = requestBody => {
        return this.api.post('/auth/login', requestBody);
      };
     
    signup = requestBody => {
        return this.api.post('/auth/signup', requestBody);
      };
     
    verifyToken = () => {
        return this.api.get('/auth/verify');
      }
}

const authService = new AuthService();

export default authService;