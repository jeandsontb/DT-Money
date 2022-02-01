import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [ transactions, setTransaction ] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transaction')
    .then(response => setTransaction(response.data.transactions));
  }, []);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });

    console.log(response);
    const { transaction } = response.data;

    setTransaction([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}} >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  return context;
}