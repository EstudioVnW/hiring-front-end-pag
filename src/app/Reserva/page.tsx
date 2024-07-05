
import Form from "@/components/form";
import Link from "next/link";

export default async function Reserva(){
    return(
    <main>
        <Link href="/"><button className="buttonSingle">Voltar</button></Link>
        <Form/>
    </main>
    )
}