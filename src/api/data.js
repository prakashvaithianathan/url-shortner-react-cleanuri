import axios from "axios";
import App from '../App'

export const short = async (userData) => {
  try {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Methods": "PUT,POST,GET,OPTIONS,ORIGIN",
        "Access-Control-Allow-Headers":
          "Accept,Authorization,Content-Type,Origin,X-Auth-Token",
        "Access-Control-Allow-Credentials": "true",
      },
    };
    const url =
      "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten";
    const insert = {
      url: userData,
    };

    const { data } = await axios.post(url, insert, config);

    return data;
  } catch (error) {
    
  return error.message
  }
};
