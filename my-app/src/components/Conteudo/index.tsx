import { useState, useEffect } from 'react';
import imgSquad from '../../img/quadrado.png';
import Lampada from '../Lampada';

let count: number = 0; 

export default function Conteudo() {
    
    const [estado, setEstado] = useState<number>(0);

    function incrementar() {
        count = count + 1;
        console.log("Valor comum: " + count);
    }

    function incrementarEstado() {
        setEstado((anterior) => anterior + 1);
        console.log("Valor do estado (assíncrono):", estado);
    }

    // 2. Atualização de efeito colateral com useEffect
    useEffect(() => {
        document.title = "Valor do Estado : " + estado.toString();
    }, [estado]);

    return (
        <main>

            <Lampada/>


            <div>
                {/* Note que o "count" só atualiza na tela quando o componente re-renderizar por outro motivo */}
                <button onClick={incrementar}>Aumenta Comum - {count}</button>
            </div>
            <div>
                <button onClick={incrementarEstado}>Aumenta Estado - {estado}</button>
            </div>

            <section>
                <figure>
                    <img src="https://placehold.co/600x400/FccFFF0/oooFFFF/png" alt="Imagem ilustrativa do conteúdo" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <figure>
                    <img src={imgSquad} alt="Imagem ilustrativa" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>

            <section>
                <figure>
                    <img src="/favicon.png" alt="Imagem ilustrativa do conteúdo" />
                    <figcaption>
                        Imagem utilizada para representar o conteúdo da aplicação.
                    </figcaption>
                </figure>
            </section>
        </main>
    );
}