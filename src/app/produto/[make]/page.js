"use client"
import Image from "next/image";

import { useParams } from "next/navigation";

export default function Produto() {

    const params = useParams();
        
  return (
    <main >
      <div>

        <h1>Produto {params.make}</h1>

      </div>
    </main>
  );
}
