import Link from 'next/link';
import '../app/styles.scss'
import Image from 'next/image'


export default async function Feed(){
    return(
        <header>
<nav>
<Image src="/imagens/Genesis-logo.png" width={200} height={120} alt="Logo"/>
    <ul>
    <Link href={'/'}><li>Inicio</li></Link>
    <Link href={'/Favoritos'}><li>Favoritos</li></Link>
    <Link href={'/Reserva'}><button>Reserve-aqui</button></Link>
    </ul>


</nav>
</header>
)
}