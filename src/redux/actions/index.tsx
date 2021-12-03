

export const addCart = (product:any) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delCart = (product:any) => {
    return{
        type : "DELITEM",
        payload : product
    }
}