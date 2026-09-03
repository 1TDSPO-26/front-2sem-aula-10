import { useState } from "react";


export default function Lampada() {
    let lampadaComumAcesa = false;

    const [lampadaStateAcesa, setLampadaStateAcesa] = useState<boolean>(false);

    function alternarVariavelComum() {
        lampadaComumAcesa = !lampadaComumAcesa;
        console.log("Variável comum: ", lampadaComumAcesa)
    }

    function alternarUseState() {
        if (!lampadaStateAcesa) {
            setLampadaStateAcesa(true);
        } else {
            setLampadaStateAcesa(false);
        }
    }

    return (
        <main>
            <h1>Variável comum versus useState</h1>

            <section>
                <h2>Lâmpada com variável comum</h2>

                <p>
                    Estado: {lampadaComumAcesa ? " acesa" : " apagada"}
                </p>

                <img src={lampadaComumAcesa ? "images/lampada-acesa.png" : "images/lampada-apagada.png"}
                    alt={lampadaComumAcesa ? "Lâmpada controlada por variável comum acesa" : "Lâmpada controlada por variável comum apagada"}
                    width="250" />
            </section>

            <div>
                <figure>
                    <img src={lampadaStateAcesa ? "/images/lampada-acesa.png" : "/images/lampada-apagada.png"}
                        alt={lampadaStateAcesa ? "Lâmpada acesa!" : "Lâmpada apagada!"} width="150" />
                    <figcaption>{lampadaStateAcesa ? "Lâmpada acesa!" : "Lâmpada apagada!"}</figcaption>
                    <button onClick={alternarUseState}>{lampadaStateAcesa ? "APAGAR" : "ACENDER"}</button>
                </figure>
            </div>
        </main>
    )
}