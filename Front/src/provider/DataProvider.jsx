import { createContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getUserData, getUserActivityData, getUserPerformanceData, getUserAverageSessionData } from "../utils/apiService/apiService";


export const DataContext = createContext({
    userData: {},
    userActivityData: {},
    userPerformanceData: {},
    userAverageSessionData: {}
})

const DataProvider = ({children}) => {
    const { id } = useParams();

    const [userData, setUserData] = useState({})
    const [userActivityData, setUserActivityData] = useState({})
    const [userPerformanceData, setUserPerformanceData] = useState({})
    const [userAverageSessionData, setUserAverageSessionData] = useState({})

    // USERDATA
    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getUserData(id);
            setUserData(data.data);

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
        };

        fetchData();
    }, [id]);

    // ACTIVITY
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getUserActivityData(id);
            setUserActivityData(data.data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        fetchData();
      }, [id]);

      // PERFORMENCE
      useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserPerformanceData(id);
                setUserPerformanceData(data.data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              }
            };
            fetchData();
    }, [id]);

     // AVERAGE SESSION
     useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getUserAverageSessionData(id);
              setUserAverageSessionData(data.data);
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
          fetchData();
  }, [id]);


    return (
        <DataContext.Provider value={{userData, userActivityData, userPerformanceData, userAverageSessionData, setUserData}}>
            {children} 
        </DataContext.Provider>
    ) 
}

export default DataProvider;