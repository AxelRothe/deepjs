import axios from "axios";

interface APIOptions {
    API_KEY, API_URL, API_AUTH_PREFIX
}

export default class API {

    API_URL: string;
    API_KEY: string;
    API_AUTH_PREFIX: string;

    private readonly httpHeaders: {
        headers: {
            Authorization: string
        }
    };

    constructor(APIOptions: APIOptions) {
        this.API_KEY = APIOptions.API_KEY;
        this.API_URL = APIOptions.API_URL;
        this.API_AUTH_PREFIX = APIOptions.API_AUTH_PREFIX;

        this.httpHeaders = {
            headers: {
                Authorization: `${this.API_AUTH_PREFIX} ${this.API_KEY}`
            }
        }
    }

    async get (url) : Promise<any> {
        try {
            const response = await axios.get(`${this.API_URL}${url}`, this.httpHeaders)
            return response.data
        } catch (e: any) {
            console.log(e)
            throw new Error("Error while fetching data")
        }
    }

    async post (url, data) : Promise<any> {
        try {
            const response = await axios.post(`${this.API_URL}${url}`, data, this.httpHeaders)
            return response.data
        } catch (e: any) {
            console.log(e)
            throw new Error("Error while fetching data")
        }
    }

    async checkAuthorization(){
        try {
            await this.get("/jobs");
            return true;
        } catch (e: any) {
            return false
        }
    }

}
