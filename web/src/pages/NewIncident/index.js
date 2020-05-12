import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import InputMask from "react-input-mask";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const [, valueWithoutCurrency] = value.split(" ");

    const data = {
      title,
      description,
      value: valueWithoutCurrency
    };

    try {
      const responseApi = await api.post("/incidents", data, {
        headers: { authorization: ongId }
      });

      history.push("/profile");

      alert(`Caso de id nº ${responseApi.data.id} criado com sucesso!`);
    } catch (error) {
      alert("Erro ao criar um novo caso, tente novamente!");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <InputMask
            mask="R$ 99999"
            maskChar=""
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit" onClick={handleSubmit}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
