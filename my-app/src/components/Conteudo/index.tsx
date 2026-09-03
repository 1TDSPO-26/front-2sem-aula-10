import { useState } from "react";
import imgQuadrado from "../../img/png-front.png";

export default function Conteudo() {

    let comum:number = 0;

    function incrementaComum(){
        comum = comum + 1;
        console.log("Valor de comum: ", comum);
    }

    const[estado,setEstado] = useState<number>(0);

    function incrementaEstado(){
        setEstado((anterior)=> anterior + 1 );
        console.log("Valor do estado: ", estado)
    }

    document.title = "Valor do estado: " + estado.toString();


    return (
        <main>
            <div>
                <button onClick={incrementaComum}>Aumenta Comum - {comum}</button>
            </div>
            <div>
                <button onClick={incrementaEstado}>Aumenta Estado - {estado}</button>
            </div>
            <h2>Bem-vindo à minha aplicação React!</h2>
            <section>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloribus veritatis distinctio quam eos nesciunt adipisci nulla. Fuga nesciunt recusandae exercitationem omnis! Minus odit omnis itaque atque inventore, pariatur ducimus?</p>
            </section>

            <section>


                <figure>
                    <img
                        src="https://placehold.co/600x400/FF0000/FFFFFF/png"
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem de referência externa</h2>
                <figure>
                    <img
                        src={imgQuadrado}
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem de referência estática</h2>
                <figure>
                    <img
                        src="/quadrado-2.png"
                        alt="Imagem ilustrativa do conteúdo" width={200}
                    />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}
