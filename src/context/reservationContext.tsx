import React, { useState, Dispatch, SetStateAction, useContext } from "react";
import { Book } from "../types/types";

interface ReservationContextType {
  reservedList: Book[];
  setReservedList: Dispatch<SetStateAction<Book[]>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const ReservationContext = React.createContext<ReservationContextType>(
  {} as ReservationContextType
);

export const ReservationProvider: React.FC<ProviderProps> = ({ children }) => {
  const [reservedList, setReservedList] = useState<Book[]>([]);
  return (
    <ReservationContext.Provider value={{ reservedList, setReservedList }}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const { reservedList, setReservedList } = useContext(ReservationContext);
  return { reservedList, setReservedList };
};
