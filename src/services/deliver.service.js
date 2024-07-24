const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.CLIENT_API_KEY; 

const getAllJokeTypes = async () => {
    console.log("#$ get all types service",`${process.env.DELIVER_SERVICE_URL}/type/all`)
    try {
      const response = await axios.get(
        `${process.env.DELIVER_SERVICE_URL}/type/all`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching order details`);
    }
  }
  
  const addType = async (type) => {
    console.log("#$ add  types service",`${process.env.DELIVER_SERVICE_URL}/type/create`, type)
    try {
      const response = await axios.post(
        `${process.env.DELIVER_SERVICE_URL}/type/create`,
        type,
        {
            headers: {
              Authorization: `ApiKey ${apiKey}`,
            },
          }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding types");      
      throw error;
    }
  };

  const createjoke = async (joke) => {
    console.log("#$ add  types service",`${process.env.DELIVER_SERVICE_URL}/type/create`, joke)
    try {
      const response = await axios.post(
        `${process.env.DELIVER_SERVICE_URL}/joke/create`,
        joke,
        {
            headers: {
              Authorization: `ApiKey ${apiKey}`,
            },
          }
      );
      return response.data;
    } catch (error) {
      console.error("Error adding types");      
      throw error;
    }
  };



  module.exports = {getAllJokeTypes, addType, createjoke};