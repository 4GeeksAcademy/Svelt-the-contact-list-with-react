import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <div>
        {store.contacts.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
