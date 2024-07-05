import Index from './index_Bmw'
import IndexFiat from "./index_Fiat"
import IndexJeep from "./index_Jeep"

export default async function Favoritos(){
    return(
        <>
        <h1 className='fav'>Favoritos</h1>
        <main className='Favoritos'>
        <Index/>
        <IndexFiat/>
        <IndexJeep/>
    </main>
    </>

    )
}