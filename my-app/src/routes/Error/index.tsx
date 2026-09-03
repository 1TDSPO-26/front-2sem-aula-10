import { Link } from "react-router";

export default function Error() {
  return (
   <main>
    <h1>Erro 404</h1>
    <div>
        <Link to="/">Voltar para a página inicial</Link>
    </div>
   </main>
  )
}
