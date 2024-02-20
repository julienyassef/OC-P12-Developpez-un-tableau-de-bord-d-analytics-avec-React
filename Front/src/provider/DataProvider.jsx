import { createContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getUserData, getUserActivityData, getUserPerformanceData, getUserAverageSessionData } from "../utils/apiService/apiService";
import { getUserDataMock, getUserActivityDataMock, getUserAverageSessionDataMock, getUserPerformanceDataMock   } from "../utils/mockApi/mockApi";


export const DataContext = createContext({
    userData: {},
    userActivityData: {},
    userPerformanceData: {},
    userAverageSessionData: {},
    isLoading: true,
    isError: false,
})

const DataProvider = ({children}) => {
    const { id } = useParams();

    const [userData, setUserData] = useState({})
    const [userActivityData, setUserActivityData] = useState({})
    const [userPerformanceData, setUserPerformanceData] = useState({})
    const [userAverageSessionData, setUserAverageSessionData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // USERDATA
    useEffect(() => {
        const fetchData = async () => {
        try {
            // const data = await getUserDataMock(id);
            const data = await getUserData(id);
            setUserData(data.data);

        } catch (error) {
            setIsError(true)
            console.error('Error fetching user data:', error);
        }
        };

        fetchData();
    }, [id]);

    // ACTIVITY
    useEffect(() => {
        const fetchData = async () => {
          try {
            // const data = await getUserActivityDataMock(id);
            const data = await getUserActivityData(id);
            setUserActivityData(data.data);
          } catch (error) {
            setIsError(true)
            console.error('Error fetching user data:', error);
          }
        };
        fetchData();
      }, [id]);

      // PERFORMENCE
      useEffect(() => {
        const fetchData = async () => {
            try {
                // const data = await getUserPerformanceDataMock(id); 
                const data = await getUserPerformanceData(id);
                setUserPerformanceData(data.data);
              } catch (error) {
            setIsError(true)
            console.error('Error fetching user data:', error);
              }
            };
            fetchData();
    }, [id]);

     // AVERAGE SESSION
     useEffect(() => {
      const fetchData = async () => {
          try {
              // const data = await getUserAverageSessionDataMock(id); 
              const data = await getUserAverageSessionData(id);
              setUserAverageSessionData(data.data);
            } catch (error) {
            setIsError(true)
            console.error('Error fetching user data:', error);
            }
          };
          fetchData();
  }, [id]);

      useEffect(() => {
        if (userData.id &&
            userActivityData.userId &&
            userPerformanceData.userId &&
            userAverageSessionData.userId) {
              setIsLoading(false)
            }
      }, [userData, userActivityData, userPerformanceData, userAverageSessionData])


    return (
        <DataContext.Provider value={{userData, userActivityData, userPerformanceData, userAverageSessionData, setUserData, isLoading, isError}}>
            {children} 
        </DataContext.Provider>
    ) 
}

export default DataProvider;