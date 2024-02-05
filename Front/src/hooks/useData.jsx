import { useContext } from "react";
import { DataContext } from "../provider/DataProvider";

const useData = () => {
    const context = useContext(DataContext)

    if(!context) {
        throw Error('useData doit être utilisé à l\'interieur de DataProvider')
    }

    return context;
}

export default useData;