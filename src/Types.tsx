export type TransactionType = {
    id: number;
    title: string;
    amount: number;
}

export type TransactionsArray = {
    transactions: TransactionType[];
}

export type firebaseConfig = {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  };