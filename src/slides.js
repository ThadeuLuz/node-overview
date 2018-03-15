// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  MarkdownSlides,
  CodePane,
  Code,
  Image,
  Layout,
  Fill
} from "spectacle";

const images = {
  node: require("./images/node_logo.svg"),
  me: require("./images/me.jpg"),
  gde: require("./images/gde.svg"),
  handtalk: require("./images/handtalk.svg")
};

export default [
  // Capa
  // <Heading size={1} textColor="primary">
  //   Node.js Overview
  // </Heading>
  <Slide
    transition={["zoom"]}
    bgColor="#333"
    notes="Quem sou eu, onde trabalho, credenciais, links"
  >
    <Image src={images.node} />
  </Slide>,

  // Introdução a apresentação
  <Slide bgImage={images.me} bgDarken={0.25}>
    <Layout>
      <Fill />
      <Fill>
        <Heading fit textColor="tertiary">
          Thadeu Luz
        </Heading>
        <br />
        <br />
        <br />
        <Layout>
          <Fill>
            <Image src={images.handtalk} height={100} />
            <Text textSize={20} textColor="tertiary">
              CPO Fundador
            </Text>
          </Fill>
          <Fill>
            <Image src={images.gde} height={100} />
            <Text textSize={20} textColor="tertiary">
              GDE Firebase
            </Text>
          </Fill>
        </Layout>
        <br />
        <br />
        <Text textSize={20} textColor="tertiary">
          github.com/thadeuluz
        </Text>
        <Text textSize={20} textColor="tertiary">
          twitter.com/thadeuluz
        </Text>
        <Text textSize={20} textColor="tertiary">
          linkedin.com/in/thadeuluz
        </Text>
        <Text textSize={20} textColor="tertiary">
          https://thadeu.us
        </Text>
      </Fill>
    </Layout>
  </Slide>,

  // Estrutura da apresentaçao
  <Slide>
    <Layout>
      <Fill />
      <Fill>
        <List>
          <Text textSize={35}>Como surgiu o Node.js?</Text>
          <Text textSize={35}>O que é Node.js?</Text>
          <Text textSize={35}>Como usar Node.js?</Text>
          <Text textSize={35}>Onde usar Node.js?</Text>
        </List>
      </Fill>
    </Layout>
  </Slide>,

  // Nascimento do JavaScript
  <Slide>
    <Notes>
      Como começou o javascript. LiveScript, mas pra pegar carona java,
      javascript em 10 dias. Fácil de usar.
    </Notes>
    <Heading fit>1995 - Brendan Eich Netscape</Heading>
    <List>
      <ListItem>Brendan Eich on Netscape em 1995</ListItem>
      <ListItem>Chumbeta do Java</ListItem>
      <ListItem>Fácil de usar, para iniciantes</ListItem>
      <ListItem>Padronizado (ECMA)</ListItem>
      <ListItem>Feito em 10 dias</ListItem>
    </List>
  </Slide>,

  // Nascimento do Chrome/V8
  <Slide>
    <Notes>Em 2008 nasce o Google Chrome</Notes>
    <Heading fit>2008 - Nascimento do Google Chrome e V8</Heading>
    <List>
      <ListItem>Navegador "sem frisos"</ListItem>
      <ListItem>Muito rápido</ListItem>
    </List>
  </Slide>,

  // ...e do V8
  <Slide>
    <List>
      <ListItem>Gmail estava ficando pesado</ListItem>
    </List>
  </Slide>,

  // Nascimento do Node.js
  <Slide>
    <Heading fit>2009 - Nascimento do Node.js</Heading>
    <List>
      <ListItem>Ryan Dahl na JSConf 2009</ListItem>
      <ListItem>Server Side JavaScript</ListItem>
      <ListItem>Em cima do V8</ListItem>
      <ListItem>CommonJS modules</ListItem>
    </List>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/ztspvPYybIY"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </Slide>,

  // O que é o Node.js
  <Slide>
    <Heading fit>O que é o Node.js</Heading>
    <List>
      <ListItem>JavaScript Para servidor</ListItem>
      <ListItem>É um software baseado em V8</ListItem>
      <ListItem>I/O assíncrono</ListItem>
      <ListItem>Baixar e instalar em nodejs.org</ListItem>
    </List>
  </Slide>,

  // Como usar o Node
  <Slide>
    <Heading fit>
      NPM é o gerenciador de pacotes do node, e seu melhor amigo.
    </Heading>
    <List>
      <ListItem>Package.json</ListItem>
      <ListItem>Prioridade local</ListItem>
      <ListItem>Commandos padronizados</ListItem>
      <ListItem>Muitos pacotes</ListItem>
    </List>
  </Slide>,

  // Criando um projeto e instalando pacotes
  <Slide>
    <Heading fit>Projetos</Heading>
    <List>
      <ListItem>Importando</ListItem>
      <ListItem>Linha de comando</ListItem>
      <ListItem>global</ListItem>
    </List>
  </Slide>,

  // Onde usar o node
  <Slide>
    <Heading fit>Onde usar o node?</Heading>
    <List>
      <ListItem>Back-end</ListItem>
      <ListItem>Front-end</ListItem>
    </List>
  </Slide>,

  // Diversos outros projetos
  <Slide>
    <Heading fit>Onde usar esses pacotes</Heading>
    <List>
      <ListItem>Server</ListItem>
      <ListItem>Mobile</ListItem>
      <ListItem>Desktop</ListItem>
      <ListItem>IoT</ListItem>
      <ListItem>Web</ListItem>
      <ListItem>APIs</ListItem>
    </List>
  </Slide>,

  // Good bye
  <Slide>
    <Heading fit>Thank you</Heading>
  </Slide>
];
