import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main>
      <h2>404 - Página não encontrada!</h2>
      <div>
        <Link to="/">Home</Link>
      </div>
    </main>
  )
}
