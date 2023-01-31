import { useEffect, useReducer } from "react";

export const useLocalStorage = (itemName, initialValue) => {
    const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
    const { 
        item,
        error,
        loading,
    } = state;

    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });

    const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });

    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });

    useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if(!localStorageItem){ 
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = [];
                } else parsedItem = JSON.parse(localStorageItem);

                onSuccess(parsedItem);      
            } catch(error){
                onError(error);
            }
        }, 1500);
    });

    const saveItem = (newItem) => {
        try{
            const stringifiedNewItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedNewItem);
            onSave(newItem);
        } catch(error){
            onError(error);
        }
    }

    return { item, saveItem, loading, error };
}

const initialState = ({ initialValue }) => (
    {
        item: initialValue,
        error: false,
        loading: true,
    }
)

const actionTypes = {
    error: "ERROR",
    success: "SUCCESS",
    save: "SAVE",
};

const reducerObject = (state, payload) => {
    return {
        [actionTypes.error]: {
            ...state,
            error: true,
        },
        [actionTypes.success]: {
            ...state,
            error: false,
            loading: false,
            item: payload,
        },
        [actionTypes.save]: {
            ...state,
            item: payload,
        }
    };
}

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;