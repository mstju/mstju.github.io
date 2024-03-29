import React from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../assets/logo/logo.png'
import '../styles/privacidade.css'

function Privacidade() {
    return (
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      

        <div className="container-fluid">
        <main className="privacidade" />
        <button className="collapsible">
          O que é e pra que serve a política de privacidade?
        </button>
        <div className="content">
          <p>
            A política de privacidade é um documento importante que explica como
            coletamos, usamos e protegemos as informações pessoais de nossos
            usuários.
          </p>
          <p>
            Em nosso site, solicitamos informações pessoais de nossos usuários,
            como nome, CPF, endereço de e-mail e número de telefone, para que
            possamos fornecer os serviços solicitados. Também podemos coletar
            informações não pessoais, como dados demográficos e informações
            sobre o uso do site.
          </p>
          <p>
            Uma das principais razões pela qual as empresas e organizações criam
            políticas de privacidade é para cumprir com leis e regulamentos que
            protegem a privacidade das pessoas. Por exemplo, a Lei Geral de
            Proteção de Dados (LGPD) no Brasil e o Regulamento Geral de Proteção
            de Dados (GDPR) na União Europeia estabelecem regras para o
            tratamento de dados pessoais de cidadãos desses países. Essas leis
            exigem que as empresas e organizações informem claramente como
            coletam, usam e protegem esses dados, e dão aos usuários direitos
            específicos em relação às suas informações pessoais.
          </p>
          <p>
            Além de cumprir com leis e regulamentos, as políticas de privacidade
            também servem para estabelecer confiança e transparência entre as
            empresas e os usuários. Quando os usuários sabem como suas
            informações serão tratadas e que elas serão protegidas de forma
            adequada, eles podem se sentir mais confortáveis em compartilhar
            esses dados e utilizar os serviços oferecidos pela empresa. Isso é
            especialmente importante em um site de venda e aluguel de imóveis,
            onde os usuários compartilham informações pessoais e financeiras
            para reservar propriedades ou fazer transações.
          </p>
          <p>
            Além disso, as políticas de privacidade também podem ajudar a evitar
            problemas legais e de responsabilidade para as empresas. Se uma
            empresa não cumprir com as leis de proteção de dados ou não for
            transparente sobre como trata as informações pessoais de seus
            usuários, ela pode ser responsabilizada por danos ou perdas causados
            por esses atos. Além disso, a falta de confiança dos usuários em
            relação à privacidade pode levar a uma diminuição da base de
            clientes e a prejuízos financeiros para a empresa. Respeitamos a
            privacidade de nossos usuários e tomamos medidas para garantir que
            as informações pessoais sejam tratadas de forma segura e
            confidencial. Se você tiver alguma dúvida sobre nossa política de
            privacidade ou quiser solicitar a exclusão ou correção de suas
            informações pessoais, entre em contato conosco através dos canais de
            suporte fornecidos em nosso site.
          </p>
        </div>

        <button className="collapsible">
          Quais informações coletamos e como as utilizamos?
        </button>
        <div className="content">
          <p>
            Coletamos informações pessoais dos usuários para fins específicos,
            como fornecer os serviços solicitados, processar transações,
            melhorar a experiência do usuário e cumprir obrigações legais. As
            informações que coletamos podem incluir:
          </p>
          <ul>
            <li>Nome</li>
            <li>CPF</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Dados demográficos</li>
            <li>Informações sobre o uso do site</li>
          </ul>
          <p>
            Utilizamos essas informações para personalizar e melhorar os
            serviços que oferecemos, enviar comunicações relacionadas aos
            serviços, processar pagamentos, prevenir fraudes, realizar análises
            e cumprir com nossas obrigações legais.
          </p>
          <p>
            Também podemos utilizar informações não pessoais, como dados
            demográficos e informações sobre o uso do site, para fins de análise
            e melhorias no site e nos serviços oferecidos.
          </p>
        </div>

        <button className="collapsible">
          Compartilhamento de informações com terceiros
        </button>
        <div className="content">
          <p>
            Podemos compartilhar informações pessoais dos usuários com terceiros
            em determinadas circunstâncias, como:
          </p>
          <ul>
            <li>
              Para fornecer os serviços solicitados, como processar reservas e
              transações;
            </li>
            <li>Para cumprir com obrigações legais;</li>
            <li>
              Com empresas parceiras que auxiliam na prestação dos serviços;
            </li>
            <li>
              Com autoridades governamentais em resposta a solicitações legais;
            </li>
            <li>Com empresas de análise de dados e segurança;</li>
            <li>Com empresas de marketing para fins de publicidade;</li>
          </ul>
          <p>
            Ao compartilhar informações com terceiros, tomamos medidas para
            garantir que essas empresas cumpram com as leis de proteção de dados
            e mantenham a segurança e confidencialidade das informações dos
            usuários.
          </p>
        </div>

        <button className="collapsible">Cookies e tecnologias similares</button>
        <div className="content">
          <p>
            Utilizamos cookies e tecnologias similares para diversos fins, como:
          </p>
          <ul>
            <li>
              Personalizar a experiência do usuário e fornecer conteúdo
              relevante;
            </li>
            <li>
              Registrar informações sobre as preferências do usuário e
              atividades no site;
            </li>
            <li>
              Realizar análises e pesquisas para melhorar nossos serviços;
            </li>
            <li>Rastrear o uso do site e obter informações estatísticas;</li>
            <li>
              Prevenir atividades fraudulentas e garantir a segurança do site.
            </li>
          </ul>
          <p>
            Os usuários têm a opção de aceitar ou recusar cookies. A maioria dos
            navegadores da web aceita cookies automaticamente, mas é possível
            modificar as configurações do navegador para recusar cookies ou
            alertar quando um cookie estiver sendo enviado. No entanto, a recusa
            de cookies pode afetar a experiência do usuário no site.
          </p>
        </div>

        <button className="collapsible">Segurança das informações</button>
        <div className="content">
          <p>
            Levamos a segurança das informações pessoais dos usuários a sério e
            adotamos medidas técnicas, administrativas e físicas para proteger
            essas informações contra acesso não autorizado, uso indevido,
            divulgação ou destruição.
          </p>
          <p>
            No entanto, é importante ressaltar que nenhum método de transmissão
            ou armazenamento eletrônico é completamente seguro. Portanto, embora
            nos esforcemos para proteger as informações dos usuários, não
            podemos garantir sua segurança absoluta.
          </p>
        </div>

        <button className="collapsible">
          Alterações nesta política de privacidade
        </button>
        <div className="content">
          <p>
            Podemos atualizar esta política de privacidade periodicamente para
            refletir mudanças em nossas práticas de privacidade ou em
            conformidade com as leis e regulamentações aplicáveis. Recomendamos
            que os usuários revisem esta política regularmente para se manterem
            informados sobre como protegemos as informações pessoais.
          </p>
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
                <a href="./pages/privacidade" target="_blank">
                  Política de Privacidade
                </a>
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
    );
  }
  
  export default Privacidade;
  