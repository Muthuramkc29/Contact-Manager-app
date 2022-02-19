import axios from "axios";

export default axios.create({
  baseURL: "https://contact-manager-api-json.herokuapp.com/",
});
