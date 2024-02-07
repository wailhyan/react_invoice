import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.79 },
    { id: 3, name: "Orange", price: 2.49 },
    { id: 4, name: "Grapes", price: 3.99 },
    // Add more fruits as needed
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);

  const addRecord = (newRecord) => {
    const isExitedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );
    if (isExitedRecord) {
      updateRecord(isExitedRecord.id, newRecord.quantity);
    } else {
      setRecord([...records, newRecord]);
    }
  };

  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };

  const updateRecord = (id, addQuantity) => {
    setRecord(
      records.map((record) => {
        if (record.id === id) {
          const newQuantity = record.quantity + addQuantity;
          const newCost = record.price * newQuantity;
          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        handleDrawer,
        products,
        addProduct,
        records,
        addRecord,
        removeRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
