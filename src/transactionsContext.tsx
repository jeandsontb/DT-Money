import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionContext = createContext<Transaction[]>([]);

const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [ transaction, setTransaction ] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transaction')
    .then(response => setTransaction(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transaction} >
      {children}
    </TransactionContext.Provider>
  )
}

export { TransactionContext, TransactionProvider }