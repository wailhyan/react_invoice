import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";
import { GeneralContext } from "../context/GeneralContext";

const RecordGroup = () => {
  const { records } = useContext(GeneralContext);
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record key={record.id} record={record} index={index} />
      ))}
    </>
  );
};

export default RecordGroup;
