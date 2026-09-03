import { useState } from 'react'


let lampadaAcesa:boolean = false

export default function Lampada() {
  
    const [acesa, setacesa] = useState<boolean>(false);

    function alterarUseState()
    {
        if (!acesa){
            setacesa(true);
             console.log("A lâmpada está acesa");
        }
        else{
            setacesa(false);
            console.log("A lâmpada está apagada");
        }
    }

    return(

        <div>
            <figure>
                <img src={acesa ? '/images/lampada-acesa.png' : '/images/lampada-apagada.png'} alt={acesa ? 'Lâmpada acesa' : 'Lâmpada apagada'} width={100} />
                <figcaption>
                    {acesa ? 'A lâmpada está acesa' : 'A lâmpada está apagada'}
                </figcaption>
            </figure>

            <button onClick={alterarUseState}> {acesa ? 'Apagar lâmpada' : 'Acender lâmpada'}</button>
        </div>

  );
}