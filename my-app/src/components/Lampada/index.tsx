import { useState } from "react"

export default function Lampada() {

    const [acesa, setAcesa] = useState<boolean>(false);
    
    function alternarUseState(){

        if (!acesa) {
            setAcesa(true)
        } else {
            setAcesa(false)
        }

    }

    return(
        <div>
            <figure>
                <img src={acesa ? "/lampada-acesa.png":"/lampada-apagada.jpeg"} alt={acesa ? "Lâmpada Acesa!": "Lâmpada apagada!"} width={150} />
                <figcaption>{acesa ? "Lâmpada acesa!" : "Lâmpada apagada!"}</figcaption>
            </figure>
                <button onClick={alternarUseState}>{acesa ? "APAGAR" : "ACENDER"}</button>    
        </div>
                )
}