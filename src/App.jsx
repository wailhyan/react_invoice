import React, { useState } from "react";
import Header from "./component/Header";
import CheckoutForm from "./component/CheckoutForm";
import RecordTable from "./component/RecordTable";
import Footer from "./component/Footer";
import ProductDrawer from "./component/ProductDrawer";

const App = () => {
  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm />
      <RecordTable />
      <Footer />
      <ProductDrawer />
    </div>
  );
};

export default App;
