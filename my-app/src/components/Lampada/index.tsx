import { useState } from 'react'
import imgLampadaAcesa from '../../img/lampada-acesa.png'
import imgLampadaApagada from '../../img/lampada-apagada.png'

export default function Lampada() {

  let lampadaComumAcesa = false


  const [lampadaStateAcesa, setLampadaStateAcesa] =
    useState(false)

  function alternarVariavelComum() {

    lampadaComumAcesa = !lampadaComumAcesa


    console.log('Variável comum:', lampadaComumAcesa)
  }

  function alternarUseState() {
    setLampadaStateAcesa(
      (estadoAtual) => !estadoAtual,
    )
  }

  return (
    <main>
      <section>
        <img
          src={
            lampadaComumAcesa
              ? imgLampadaAcesa
              : imgLampadaApagada
          }
          alt={
            lampadaComumAcesa
              ? 'Lâmpada controlada por variável comum acesa'
              : 'Lâmpada controlada por variável comum apagada'
          }
          width="150"
        />

        <div>
          <button
            onClick={alternarVariavelComum}
            type="button"
          >
            Alternar variável comum
          </button>
        </div>
      </section>

      <hr />

      <section>
        <img
          src={
            lampadaStateAcesa
              ? imgLampadaAcesa
              : imgLampadaApagada
          }
          alt={
            lampadaStateAcesa
              ? 'Lâmpada controlada pelo useState acesa'
              : 'Lâmpada controlada pelo useState apagada'
          }
          width="150"
        />

        <div>
          <button
            aria-pressed={lampadaStateAcesa}
            onClick={alternarUseState}
            type="button"
          >
            {lampadaStateAcesa
              ? 'Apagar lâmpada'
              : 'Acender lâmpada'}
          </button>
        </div>
      </section>
    </main>
  )
}
