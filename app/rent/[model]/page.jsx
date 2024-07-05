'use client'
import { useAppContext } from '@/Context'
import React from 'react'

export default function Rent() {

    const { selectedCar } = useAppContext();

  return (
    <div>
        <h1>Alugar {selectedCar.model}</h1>
        <form action="">
            <input type="text" /> <br/>
            <input type="text" /> <br/>
            <input type="text" /> <br/>
            <input type="text" /> <br/>
            <button>enviar</button>
        </form>
    </div>
  )
}