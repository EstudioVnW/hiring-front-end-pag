import Link from "next/link";
import IndexFiat from '@/app/Favoritos/index_Fiat'
export default async function PageFiat(){
    return(
        <>
     <Link href="/"><button className="buttonSingle">Voltar</button></Link>
    <main className="PageFiat">
     <section>     
            <div>
        <IndexFiat/>
        </div>
        <div className="caixaInfo">
         <ul>
         <li>Motor:1.3 Turbo Flex:185 hp e 270 Nm de torque.2.0 Multijet Turbodiesel:170 hp e 350 Nm de torque.</li>
         <li>Transmissão:Turbo Flex: Automática de 6 velocidades.Turbodiesel: Automática de 9 velocidades.</li>      
         <li>Tecnologia:Sistema de entretenimento com tela de 10.1 polegadas.Conectividade com Android Auto e Apple CarPlay.Carregador wireless.</li>
         <li>Conforto:Ar condicionado digital dual-zone.Bancos com acabamento em couro.Iluminação ambiente.Ajuste elétrico dos bancos dianteiros.</li>
         </ul>
         <Link href='/Reserva'><button>Reservar</button></Link>
         </div>
     </section>
    
    </main>
    </>
    )
}