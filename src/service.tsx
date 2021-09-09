import apiFactory from "./api";
/* This url can be put in the .env file in the root. and read process.env.APP_BASE_URL*/ 
const apiBaseURL = apiFactory("https://jsonplaceholder.typicode.com")

export const getUsers = () => {
    return apiBaseURL.get("/users")
}