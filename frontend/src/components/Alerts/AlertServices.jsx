// Define an async function to fetch alerts from the API
export const getAlerts = async () => {
  try {
    // Make a request to the API endpoint for roadworks data
    const response = await fetch("http://localhost:8080/api/roadworks");

    // Check if the response status is not OK (i.e., not in the range 200-299)
    if (!response.ok) {
      // If not, throw an error indicating that data was not found
      throw new Error("Data not found");
    }

    // Parse the response body as JSON
    const data = await response.json();
    console.log("Fetched data:", data);

    // Check if the data property exists and is an array
    if (data && Array.isArray(data.data)) {
      // If it is, return the array
      return data.data;
    } else {
      // If the data property is not an array, log an error and return an empty array
      console.error("Fetched data is not an array:", data);
      return [];
    }
  } catch (error) {
    // Catch any errors that occur during the fetch or processing of the response
    console.error("Error fetching data", error);
    // Return an empty array in case of an error
    return [];
  }
};
