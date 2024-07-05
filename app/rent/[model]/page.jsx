'use client'
import { useAppContext } from '@/Context'
import React from 'react'
import styles from './styles.module.scss'
import InputMask from 'react-input-mask';

export default function Rent() {

    const { selectedCar } = useAppContext();

    function handleRent() {
      alert("Reserva feita com Sucesso!")
    }

  return (
    <section className={styles.rent}>
        <h1 className={styles.rent__title}>Alugar {selectedCar.model}</h1>
        <form action="" className={styles.rent__form} onSubmit={handleRent}>
            <input placeholder='Nome Completo' type="text" required />
            <input placeholder='E-mail' type="email" required />
            <InputMask mask="99/99/9999" maskChar=" " placeholder='Data de Nascimento' required />
            <input placeholder='Qnt de dias' type="number" required />
            <InputMask mask="(99) 99999-9999" maskChar=" " placeholder='Cel' required />
            <InputMask mask="999.999.999-99" maskChar=" " placeholder='CPF' required />
            <button className={styles.rent__button}>Confirmar</button>
        </form>
    </section>
  )
}