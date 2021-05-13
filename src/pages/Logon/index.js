import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import logo from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";
import api from "../../services/api";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogon(event) {
    event.preventDefault();

    try {
      const responseApi = await api.post("/sessions", { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', responseApi.data.name);

      history.push('/profile');
    } catch (error) {
      alert("Id informado não pertence a nenhuma ONG cadastrada.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />
        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
