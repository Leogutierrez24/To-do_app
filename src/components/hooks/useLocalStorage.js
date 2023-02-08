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
                    parsedItem = initialValue;
                } else parsedItem = JSON.parse(localStorageItem);

                onSuccess(parsedItem);      
            } catch(error){
                onError(error);
            }
        }, 1500);
    }, []);

    const saveItem = (newItem) => {
        try{
            let data = JSON.parse(localStorage.getItem(itemName));
            data.unshift(newItem);
            localStorage.setItem(itemName, JSON.stringify(data));
            onSave(data);
        } catch(error){
            onError(error);
        }
    }

    const deleteItem = (id) => {
        try {
            let data = JSON.parse(localStorage.getItem(itemName));
            let itemIndex = data.findIndex(item => item.id === id);
            data.splice(itemIndex, 1);
            localStorage.setItem(itemName, JSON.stringify(data));
            onSave(data);
        } catch (error) {
            onError(error);
        }
    }

    const updateItem = (id, prop, change) => {
        try {
            let data = JSON.parse(localStorage.getItem(itemName));
            let itemIndex = data.findIndex(item => item.id === id);

            if (prop === "status") data[itemIndex].status = change;
            if (prop === "title") data[itemIndex].title = change;

            localStorage.setItem(itemName, JSON.stringify(data));
            onSave(data);
        } catch (error) {
            onError(error);
        }
    }

    const getItem = (id) => {
        let data = JSON.parse(localStorage.getItem(itemName));
        let itemIndex = data.findIndex(item => item.id === id);
        return data[itemIndex];
    }

    return { 
        item, 
        loading, 
        error, 
        saveItem,
        deleteItem,
        updateItem,
        getItem,
    };
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