import { useState } from 'react'

export default function Lampada() {
    const [lampadaStateAcesa, setLampadaStateAcesa] = useState<boolean>(false)

    function alternarUseState() {
        if (!lampadaStateAcesa) {
            setLampadaStateAcesa(true);
        } else {
            setLampadaStateAcesa(false);
        }
    }

    return (
    <div>
        <figure>
            <img src={lampadaStateAcesa ? "/lampada.png" : "/lampada-apagada.png"} alt={lampadaStateAcesa ? "Lampada acesa!" : "Lampada apagada!"} width={150} />
        </figure>
        <button onClick={alternarUseState}>{lampadaStateAcesa ? "APAGAR" : "ACENDER"}</button>
    </div>
    )
}