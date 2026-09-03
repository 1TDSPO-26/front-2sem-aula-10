import { useState } from "react";

export default function Lampada() {

    
    const [acesa, setAcesa] = useState<boolean>(false);

    function alternaUseState(){

        if (!acesa) {
            setAcesa(true);
        }else{
            setAcesa(false);
        }

    }


  return (
    <div>
        <figure>
            <img src={acesa ? "/lampada-acesa.png":"/lampada-apagada.png"} alt={acesa ? "Lâmpada acesa!" : "Lâmpada apagada!"} width={150} />
            <figcaption>{acesa ? "Lâmpada acesa!" : "Lâmpada apagada!"}</figcaption>
        </figure>
        <button onClick={alternaUseState}>{acesa ? "APAGAR" : "ACENDER"}</button>
    </div>
  )
}
