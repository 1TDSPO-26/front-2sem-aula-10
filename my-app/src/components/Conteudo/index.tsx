import imgQuadrado from "../../img/quadrado.png"
import { useState } from "react";



export default function Conteudo() {

    let comum: number = 0;

    function incrementaComum() {
        comum++;
        console.log("valor de comum: " + comum);
    }
    const[estado, setEstado] = useState<number>(0);
    function incrementaEstado() {
        setEstado(anterior => anterior + 1);
        console.log("valor de estado: " + estado);
    }
    return (
        <main>
            <div>
                <button onClick={incrementaComum}>Aumenta comum {comum}</button>
            </div>
            <div>
                <button onClick={incrementaEstado}>Aumenta estado {estado}</button>
            </div>
            <section>
                <h2>Conteúdo</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat vero sed sapiente amet mollitia, praesentium veniam quisquam nesciunt eum repellendus est molestias fugit? Dolores iste voluptas rem quisquam excepturi quaerat ullam rerum quam voluptate dolore incidunt voluptatem impedit facere, totam id iusto nobis sit cupiditate quae autem, doloremque dignissimos. Quis.</p>        
            </section>
            <section>
                <h2>Imagem com referência externa</h2>
            <figure>
                <img
                    src="https://placehold.co/600x400/4b0081/4b0081/png"
                    alt="Imagem ilustrativa do conteúdo"
                />

                <figcaption>
                    Imagem utilizada para representar o conteúdo da aplicação.
                </figcaption>
            </figure>
            </section>

            <section>
                <h2>Imagem com referência interna</h2>
                <figure>
                    <img src="/quadrado2.png
                    " alt="Imagem ilustrativa do conteudo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
            <section>
                <h2>Imagem com referência estática</h2>
                <figure>
                    <img src={imgQuadrado} alt="Imagem ilustrativa do conteudo" width={200} />

                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
        </main>
    )
}