const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.CLIENT_API_KEY; 

const getAllJokeTypes = async () => {
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