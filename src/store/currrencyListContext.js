import { useState, createContext } from "react";
import API from "../API";

const currencyListContext = createContext({});

export const CurrencyListProvider = (props) => {
    const [currencyList, setCurrencyList] = useState([]);
    const [exchanges, setExhanges] = useState([]);

    const getCurrencyList = () => {
        API.get("/assests").then(res => {
            setCurrencyList(res.data.data);
        }).catch(error => {
            setCurrencyList([]);
            console.log(error);
        })

    }

    const getExhanges = () => {
        API.get("/exchanges").then(res => {
            setExhanges(res.data.data);
        }).catch(error => {
            setExhanges([]);
            console.log(error);
        })
    }


    const values = {
        currencyList: currencyList,
        exchanges: exchanges,
        getCurrencyList: getCurrencyList,
        getExhanges: getExhanges
    }

    return (
        <currencyListContext.Provider value={values}>
            {props.children}
        </currencyListContext.Provider>
    );
}


export default currencyListContext;