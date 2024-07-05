import Link from "next/link";
import Image from 'next/image'
import IndexBMW from '@/app/Favoritos/index_Bmw'
export default async function PageBMW(){
    return(
        <>
    <Link href="/"><button className="buttonSingle">Voltar</button></Link>
    <main className="PageBMW">
     <section>
        <div><IndexBMW/></div> 
        <div className="caixaInfo">
        <ul><li>Motor: 2.0 litros BMW TwinPower Turbo, inline 4 cilindros, 241 hp.M35i:
        2.0 litros M TwinPower Turbo, 4 cilindros em linha, 312 hp.</li>
         <li>Transmissão: Ambos: Automática de dupla embreagem com 7 marchas.</li>
         <li>Tecnologia:Sistema BMW Operating System 9.Apple CarPlay e Android Auto.Assistente Pessoal Inteligente da BMW.</li>
         <li>Conforto e Conveniência: Controle climático multizona, bancos dianteiros ajustáveis eletricamente, teto solar panorâmico opcional.</li>
         </ul>       
        <Link href='/Reserva'><button>Reservar</button></Link>
         </div>
     </section>
    
    </main>
    </>
    )
}