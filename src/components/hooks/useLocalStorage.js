import { useState, useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
    const [item, setItem] = useState(initialValue);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if(!localStorageItem){ 
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                } else parsedItem = JSON.parse(localStorageItem);

                setItem(parsedItem);
                setLoading(false);
            } catch(error){
                setError(error);
            }
        }, 1500);
    });

    const saveItem = (newItem) => {
        try{
            const stringifiedNewItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedNewItem);
            setItem(newItem);
        } catch(error){
            setError(error);
        }
    }

    return { item, saveItem, loading, error };
}