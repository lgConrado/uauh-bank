import Logo from "../../assets/logo-azul-bank.svg";

const PoliticaEticaCompliance = () => {
  return (
    <section className="politica">
      <div className="politica__logo">
        <img src={Logo} alt="" />
      </div>
      <article>
        <span>
          <h1>1. INTRODUÇÃO</h1>
          <p>
            A MH Sociedade de Crédito Direto S.A. (UAUH BANK) está firmemente
            comprometida com os mais altos padrões de ética e conduta. Este
            Código de Ética e Conduta foi estabelecido para orientar as ações da
            empresa, baseando-se em valores fundamentais como flexibilidade,
            tolerância, transparência e honestidade. Nosso objetivo é promover
            um ambiente de trabalho agradável, leve e alegre.
          </p>
        </span>
        <span>
          <h1>2. VALORES FUNDAMENTAIS</h1>
          <ul>
            <li>
              Flexibilidade e Tolerância: Adotamos uma abordagem flexível e
              tolerante diante de diversas situações e desafios, promovendo
              soluções criativas e eficazes.
            </li>
            <li>
              Transparência e Honestidade: Nos esforçamos para garantir uma
              comunicação clara e honesta, mantendo a verdade e a abertura em
              todas as interações.
            </li>
            <li>
              Alegria e Leveza: Nos empenhamos em cultivar um ambiente de
              trabalho positivo e energético, que encoraja o bem-estar e a
              satisfação.
            </li>
          </ul>
        </span>
        <span>
          <h1>3. CONDUTA PROFISSIONAL</h1>
          <ul>
            <li>
              {" "}
              Integridade em Negócios: Nos comprometemos a adotar as melhores
              práticas do mercado financeiro, assegurando a justiça e a
              integridade em todas as transações
            </li>
            <li>
              Respeito às Leis: Nos comprometemos a cumprir rigorosamente todas
              as leis e regulamentos aplicáveis, tanto nacionais quanto
              internacionais.
            </li>
            <li>
              Conflitos de Interesse: Nos esforçamos para evitar situações que
              possam implicar conflitos entre interesses pessoais e os da
              empresa.
            </li>
          </ul>
        </span>
        <span>
          <h1>4. RELACIONAMENTO COM STAKEHOLDERS</h1>
          <ul>
            <li>
              Clientes e Fornecedores: Nos esforçamos para manter relações
              baseadas na ética e na transparência com nossos clientes e
              fornecedores, realizando due diligence para assegurar alinhamento
              e conformidade.
            </li>
            <li>
              Colaboradores: Nos comprometemos a promover a diversidade e a
              inclusão, e proibir qualquer forma de discriminação ou assédio.
            </li>
          </ul>
        </span>
        <span>
          <h1>5. GOVERNANÇA DE ÉTICA</h1>
          <ul>
            <li>
              Comitê de Ética: O Comitê de Ética é responsável pela supervisão e
              implementação deste código. Ele é um pilar central na estrutura de
              governança da UAUH BANK.
            </li>
            <li>
              Treinamento e Conscientização: Implementamos programas contínuos
              de educação em ética para todos os funcionários, reforçando a
              importância do cumprimento deste código.
            </li>
          </ul>
        </span>
        <span>
          <h1>6. COMUNICAÇÃO E DENÚNCIA</h1>
          <ul>
            <li>
              Canais de Denúncia: Disponibilizamos canais confidenciais, como
              e-mail (ouvidoria@uauh.com.br), website e linha 0800, para relatar
              violações éticas.
            </li>
            <li>
              Proteção ao Denunciante: Garantimos proteção contra retaliações a
              qualquer indivíduo que denuncie, de boa fé, violações deste
              código.
            </li>
          </ul>
        </span>
        <span>
          <h1>7. RESPOSTA A VIOLAÇÕES</h1>
          <ul>
            <li>
              Investigação e Sanção: Nos comprometemos a investigar qualquer
              denúncia de violação e aplicar sanções adequadas, de acordo com a
              gravidade da infração.
            </li>
            <li>
              Transparência nas Ações: As decisões e ações tomadas em resposta a
              violações serão documentadas e transparentes, respeitando os
              princípios deste código.
            </li>
          </ul>
        </span>
        <span>
          <h1>8. REVISÃO DO CÓDIGO</h1>
          <p>
            Este código será revisado periodicamente para garantir sua
            atualidade e eficácia, adaptando-se às mudanças nas leis e nas
            melhores práticas do setor.
          </p>
        </span>
        <span>
          <h1>9. CASOS PRÁTICOS</h1>
          <p>
            Vazamento de Informações: Adotamos estratégias proativas para
            prevenir e responder a vazamentos, garantindo a segurança das
            informações.
          </p>
          <ul>
            <li>
              {" "}
              Furto: Implementamos medidas rigorosas de segurança física e
              digital para prevenir furtos.
            </li>
            <li>
              Atividades Ilícitas: Mantemos uma vigilância constante e
              cooperamos com autoridades para combater envolvimentos em
              atividades ilícitas.
            </li>
          </ul>
          <p>
            Este Código de Ética e Conduta serve como um guia para todos na UAUH
            BANK, reforçando nosso compromisso com um ambiente de trabalho
            ético, responsável e respeitoso.
          </p>
        </span>
      </article>
    </section>
  );
};

export default PoliticaEticaCompliance;
