import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../../redux/auth/authActions";
import Header from "../../../components/Header";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(signOut());
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 50,
        }}
      >
        <h1>Página DASHBOARD HOME a implementar</h1>

        <button type="button" onClick={handleSubmit}>
          Sing Out
        </button>
      </div>
    </>
  );
};

export default Home;
