import { createContext, ReactNode, useState } from "react";
import { Cep } from '../models/Cep'

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  address: Cep;
  setAddress: (newState: Cep) => void;
};

export const UserContext = createContext({} as UserContextType);

export const UserCotenxtProvider = ({ children }: UserContextProps) => {
  const [address, setAddress] = useState({} as Cep);

  return (
    <UserContext.Provider value={{ address, setAddress }}>
      {children}
    </UserContext.Provider>
  );
};