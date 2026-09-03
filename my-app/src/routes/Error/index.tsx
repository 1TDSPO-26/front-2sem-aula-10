import {Link} from "react-router";

export default function Error() {
    return (
        <main>
            <h1>404: Página não encontrada</h1>
            <Link to="/">Voltar para a página inicial</Link>
        </main>
    );
}