const BASE_URL = 'http://localhost:3000';

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

export const getUserData = async (userId) => {
  return fetchData(`/user/${userId}`);
};

export const getUserActivityData = async (userId) => {
  return fetchData(`/user/${userId}/activity`);
};

export const getUserAverageSessionData = async (userId) => {
  return fetchData(`/user/${userId}/average-sessions`);
};

export const getUserPerformanceData = async (userId) => {
  return fetchData(`/user/${userId}/performance`);
};