import Link from "next/link";
import './Header.css';

const Header = () => {
    return (
        <>
            <header>
                <div className="content">
                    <div className="content_header">
                        <div className="header_esq">
                            <div className="logo">
                                <Link href="/" className="titulo">
                                    <img src="/img/logo.png" alt="imagem" />
                                </Link>
                            </div>
                        </div>
                        <div className="header_dir">
                            <div id="bemvindo">
                                <Link href="/Perfil" className="Login">(Login | Register)</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <nav id="menu_principal">
                <div className="content">
                    <ul id="menu_principal_itens">
                        <li>
                            <Link href="/Seguros" className="menu_item">Seguros</Link>
                        </li>
                        <li>
                            <Link href="/RegistroCarro" className="menu_item">Registrar Carro</Link>
                        </li>
                        <li>
                            <Link href="/Contato" className="menu_item">Contato</Link>
                        </li>
                        <li>
                            <Link href="/Integrantes" className="menu_item">Integrantes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;