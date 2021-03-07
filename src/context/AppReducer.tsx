import { TransactionType } from "../Types";

type Actions = 
| {type: "ADD_TRANSACTION", transaction: TransactionType}
| {type: "DELETE_TRANSACTION", id: number }

export const AppReducer = (state: { transactions: TransactionType[]; }, action: Actions ) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.id)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.transaction, ...state.transactions]
            }
        default:
            return state;
    }
}