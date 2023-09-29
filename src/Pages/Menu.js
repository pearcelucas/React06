import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Contato">Contatos</Link>
                </li>
                <li>
                    <Link to="/Cursos">Cursos</Link>
                </li>

            </ul>
        </>
    )

}