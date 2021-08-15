import React from "react";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 50,
        }}
      >
        <h1>Página DASHBOARD HOME a implementar</h1>
      </div>
    </>
  );
};

export default Home;
