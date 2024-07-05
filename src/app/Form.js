"use client";

import React, { useState } from 'react';

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState("");

    const salvar = () => {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const usuario = {
            nome: nome,
            cpf: cpf,
            phone: phone,
            data: data
        };
        usuarios.push  (usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        salvar();
    };

    return (
        <section>       
         
            <form className='CardForm' onSubmit={handleSubmit}>
            <h1>Reserve seu Carro</h1>
            <div>
                    <label>Nome: </label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />           
                   <label>CPF: </label>
                    <input type="text" value={cpf} minLength={11} maxLength={11} onChange={(e) => setCpf(e.target.value)} required />
                    <label htmlFor="phone">Telefone:</label>
                    <input type="text" value={phone} id="phone" name="phone" placeholder="DDD + Número de celular" onChange={(e) => setPhone(e.target.value)} />
                    <label htmlFor="birthday">Data de Nascimento:</label>
                    <input type="date" value={data} id="birthday" name="userbirthday" onChange={(e) => setData(e.target.value)} />
                    </div>
              <button type="submit">Reservar</button>
            </form>
        </section>
    );
}
