import axios from "axios";

const API_BASE_URL = "http://20.244.56.144";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to authenticate using clientID and clientSecret
export const authenticate = async () => {
  try {
    const response = await api.post("/test/register", {
      companyName: "afformed",
      clientID: "5f4b828c-6675-4950-8d15-e4debab30253",
      clientSecret: "KYPtzxlkeQJaPeof",
      ownerName: "lokeshwaran",
      ownerEmail: "lokeshwaran.it22@bitsathy.ac.in",
      rollNo: "7376222IT182",
    });

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error authenticating:", error.response?.data || error.message);
  }
};
