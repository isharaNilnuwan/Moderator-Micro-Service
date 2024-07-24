const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.CLIENT_API_KEY; 

const getUnModeratedJokes = async () => {
  try {
    const response = await axios.get(
      `${process.env.SUBMIT_SERVICE_URL}/submitJokes/getNewjokes`,
      {
        headers: {
          Authorization: `ApiKey ${apiKey}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching order details:`);
  }
};

const updateUnModeratedJokes = async (data) => {
    try {
      const response = await axios.put(
        `${process.env.SUBMIT_SERVICE_URL}/submitJokes/editJokes/${data._id}`,
        data,
        {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
          }
        }
      );

      console.log("updated joke", response.data)
      return response.data;
    } catch (error) {
      console.error(`Error fetching order details:`);
    }
  };

  const deleteUnModeratedJokes = async (id) => { // Assuming id is a number; adjust if needed
    console.log("#$ delete unmoderated joke", `${process.env.SUBMIT_SERVICE_URL}/submitJokes/rejectJokes/${id}`);
  
    try {
      const response = await axios.delete(
        `${process.env.SUBMIT_SERVICE_URL}/submitJokes/rejectJokes/${id}`,
        {
          headers: {
            Authorization: `ApiKey ${apiKey}`,
          },
        }
      );
  
      console.log("Deleted joke", response.data);
      return response.data;
    } catch (error) {
      console.error(`Error deleting joke: `);
    }
  };
  

module.exports = {getUnModeratedJokes, updateUnModeratedJokes, deleteUnModeratedJokes};
