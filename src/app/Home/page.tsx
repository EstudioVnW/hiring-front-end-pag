import Link from "next/link";
import Image from 'next/image'
import '../styles.scss'
import Index from '@/app/Favoritos/index_Bmw'
import IndexFiat from "@/app/Favoritos/index_Fiat"
import IndexJeep from "@/app/Favoritos/index_Jeep"

  export default async function Home() {
    return (
      <>
      <main>
        <section className="hero">
        <h1>Explore novos horizontes com o carro perfeito. Alugue hoje e viaje com conforto e estilo.</h1>
        </section>
        <section>
        <div className='card1'>
            <Index/>
            <p>Descubra a sofisticação e o desempenho com o BMW X1. Este SUV compacto combina o luxo característico da BMW com a versatilidade e a eficiência que você precisa no dia a dia.</p>          
            <Link href='/SinglePageBMW'><button>Saiba Mais</button></Link>
        </div>
        <div className='card2'>
            <IndexFiat/>
            <p>Descubra a sofisticação e o desempenho com o BMW X1. Este SUV compacto combina o luxo característico da BMW com a versatilidade e a eficiência que você precisa no dia a dia.</p>        
            <Link href='/SinglePageFiat'><button>Saiba Mais</button></Link>
         </div>
        <div className='card3'>
            <IndexJeep/>
            <p>Descubra a sofisticação e o desempenho com o BMW X1. Este SUV compacto combina o luxo característico da BMW com a versatilidade e a eficiência que você precisa no dia a dia.</p>          
            <Link href='/SinglePageJeep'><button>Saiba Mais</button></Link>
        </div>
        </section>
      </main>
      </>
    );
  }
    