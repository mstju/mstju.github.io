import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Privacidade from "./pages/privacidade.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/style.css";
import logo from "./assets/logo/logo.png";
import box from "./assets/index/box.jpg";
import food from "./assets/index/food.jpg";
import loja from "./assets/index/loja.jpg";
import main from "./assets/index/main.jpg";
import quiosque from "./assets/index/quiosque.jpg";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img
              src={logo}
              className="logo navbar-brand"
              alt="Voltar para a página inicial"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Alternar navegação"
            >
              <span>
                <i className="bi bi-list"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-3 mb-lg-0" id="navbar-items">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    início
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Buscar Loja
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    para proprietários
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    para imobiliárias
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-box-arrow-in-right"></i> entrar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/privacidade" element={<Privacidade />} />
        </Routes>
        <div className="header-content">
          <div className="left">
            <h2 className="form-title mb-4">Encontre a loja dos seus sonhos</h2>
            <form id="filtro" action="pages/resultados.html" method="get">
              <select
                name="estado"
                id="estado"
                className="form-select mb-3 p-2 w-100"
              >
                <option value="" selected>
                  Estado
                </option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
              </select>
              <select
                name="tipo"
                id="tipo"
                className="form-select mb-3 p-2 w-100"
              >
                <option value="" selected>
                  Tipo
                </option>
                <option value="loja-de-shopping">Loja de shopping</option>
                <option value="restaurante">Restaurante</option>
                <option value="quiosques">Quiosques</option>
                <option value="box">Box</option>
              </select>
              <select
                name="tamanho"
                id="tamanho"
                className="form-select mb-3 p-2 w-100"
              >
                <option value="" selected>
                  Tamanho
                </option>
                <option value="até-50m²">Até 50m²</option>
                <option value="de-50m²-a-100m²">De 50m² a 100m²</option>
                <option value="de-100m²-a-200m²">De 100m² a 200m²</option>
                <option value="acima-de-200m²">Acima de 200m²</option>
              </select>
              <select
                name="valor"
                id="valor"
                className="form-select mb-3 p-2 w-100"
              >
                <option value="" selected>
                  Valor
                </option>
                <option value="até-8000">Até R$8.000/mês</option>
                <option value="de-8000-a-15000">
                  De R$8.000/mês a R$15.000/mês
                </option>
                <option value="acima-de-15000">Acima de R$15.000/mês</option>
              </select>
              <button
                type="submit"
                className="btn btn-outline-dark btn-lg px-5 mt-4"
              >
                Buscar
              </button>
            </form>
          </div>
          <div className="right">
            <img
              src={main}
              alt="Mulher sorrindo, segurando sacolas cheias de compras"
              className="header-img"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="main-title">
          <h3>
            Lojas em shoppings centers, centros comerciais, galerias e ruas
          </h3>
        </div>
        <div id="area-imoveis">
          <div className="container-fluid cards-main">
            <div className="col-md-3">
              <div className="card-1 card md-3">
                <img
                  className="img-fluid"
                  src={loja}
                  alt="Manequins de uma loja de roupas"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-2 card">
                <img className="img-fluid" src={quiosque} alt="Quiosque" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-3 card">
                <img className="img-fluid" src={food} alt="Restaurante" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-4 card">
                <img className="img-fluid" src={box} alt="Boxes" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <section className="about mt-4">
            <h3 className="text-white fs-5">Sobre Nós</h3>
            <ul>
              <li>
                <a href="#">Conheça o SobreLoja</a>
              </li>
              <li>
                <a href="#">Regiões Atendidas</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <Link to="/privacidade">Política de Privacidade</Link>
              </li>
            </ul>
          </section>

          <section className="social-media mt-4">
            <h3 className="text-white fs-5">Contato</h3>
            <ul className="wrapper">
              <li className="icon facebook">
                <span className="tooltip">Facebook</span>
                <span>
                  <i className="bi bi-facebook"></i>
                </span>
              </li>
              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span>
                  <i className="bi bi-twitter"></i>
                </span>
              </li>
              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span>
                  <i className="bi bi-instagram"></i>
                </span>
              </li>
              <li className="icon linkedin">
                <span className="tooltip">Linkedin</span>
                <span>
                  <i className="bi bi-linkedin"></i>
                </span>
              </li>
              <li className="icon whatsapp">
                <span className="tooltip">WhatsApp</span>
                <span>
                  <i className="bi bi-whatsapp"></i>
                </span>
              </li>
            </ul>
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;
