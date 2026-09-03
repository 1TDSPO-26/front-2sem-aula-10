import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {

    let comum: number = 0;

    function incrementaComum() {
        comum = comum + 1;
        console.log("Valor de comum: ", comum);
    }

    const [estado, setEstado] = useState<number>(0);

    function incrementaEstado() {
        setEstado((anterior) => anterior + 1);
        console.log("Valor do estado ", estado);
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
            <section>
                <h2>Conteúdo aleatório</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque recusandae ea magni asperiores, in harum illum rerum iste tenetur, officiis ducimus necessitatibus vero maxime reprehenderit iure officia corporis maiores!</p>
            </section>
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
                <h2>Imagem com referência interna</h2>

                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
            <section>
                <h2>Imagem com referência estática</h2>

                <figure>
                    <img src="/quadrado-2.png" alt="Imagem ilustrativa do conteúdo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

        </main>
    )
}
