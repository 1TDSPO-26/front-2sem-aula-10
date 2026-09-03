import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png"
import Lampada from "../Lampada";

export default function Conteudo() {

    let comum:number = 0;

    function incrementaComum(){
        comum = comum + 1;
        console.log("Valor de comum:", comum);
    }

    const[estado,setEstado] = useState<number>(0);

    function incrementaEstado(){
        setEstado((anterior)=> anterior + 1)
        console.log("Valor de estado:", estado);
    }

    document.title = "Valor do Estado : " + estado.toString();

    return (
        <main>
            <div>
                <button onClick={incrementaComum}>Aumenta Comum - {comum}</button>
            </div>
            <div>
                <button onClick={incrementaEstado}>Aumenta Estado - {estado}</button>
            </div>
            <section>
                <h2>Imagem com referência externa</h2>

                <figure>
                    <img src="https://placehold.co/600x400/FF0000/FFFFFF/png" alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>

                <h2>Imagem com referência externa</h2>

                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            
            </section>

            <section>

                <h2>Imagem com referência externa</h2>

                <figure>
                    <img src="/quadrado-2.png" alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>

            </section>

            <section>

                <Lampada />

            </section>
        </main>
    )
}