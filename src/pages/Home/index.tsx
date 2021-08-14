import React from "react";
import CustomTextField from "../../components/CustomTextField";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <CustomTextField placeholder="Placeholder" />
    </>
  );
};

export default Home;
