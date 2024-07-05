import Link from "next/link";
import Image from 'next/image'
import IndexJeep from '@/app/Favoritos/index_Jeep'
export default async function PageJeep(){
    return(
        <>
    <Link href="/"><button className="buttonSingle">Voltar</button></Link>
    <main className="SinglePage"> 
     <section>
        <div><IndexJeep/></div>
        <div className="caixaInfo">
         <ul><li>Motor:2.4 litros Tigershark:180 hp e 237 Nm de torque.2.0 litros Turbo Diesel:170 hp e 350 Nm de torque.</li>
         <li>Transmissão: Ambos: Automática de 9 velocidades.</li>
         <li>Tecnologia:Sistema Uconnect com tela de 8.4 ou 10.1 polegadas.Apple CarPlay e Android Auto. Controle de cruzeiro adaptativo.Alerta de colisão frontal com frenagem automática.</li>
         <li>Conforto: Bancos dianteiros aquecidos e ventilados. Ajuste elétrico dos bancos dianteiros com memória.Teto solar panorâmico.</li>
         </ul>
         <Link href='/Reserva'><button>Reservar</button></Link>
         </div>
     </section>
    </main>
    </>
    )
}