// Import React
import React from "react";
import { Pie } from "react-chartjs";
import packageJson from "./package";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Notes,
  CodePane,
  Code,
  Image,
  Layout,
  Fill
} from "spectacle";

const images = {
  node: require("./images/node_full.jpeg"),
  me: require("./images/me.jpg"),
  gde: require("./images/gde.svg"),
  handtalk: require("./images/handtalk.svg"),
  netscape: require("./images/netscape.svg"),
  chrome: require("./images/chrome.svg"),
  v8: require("./images/V8.svg"),
  browserjs: require("./images/browserjs.gif"),
  termjs: require("./images/termjs.gif"),
  bestFriend: require("./images/bestFriend.gif"),
  nodeLogo: require("./images/nodelogo.png"),
  npmLogo: require("./images/npm.png"),
  ie: require("./images/ie.jpg"),
  mc: require("./images/modulecounts.png"),
  server: require("./images/logos/Server.jpg"),
  web: require("./images/logos/Web.jpg"),
  desktop: require("./images/logos/Desktop.jpg"),
  mobile: require("./images/logos/Mobile.jpg"),
  iot: require("./images/logos/IOT.jpg"),
  misc: require("./images/logos/Misc.jpg"),
  prefinal: require("./images/logos/PreFinal.jpg"),
  final: require("./images/logos/Final.jpg")
};

const data = [
  { value: 10, color: "#FDB45C", label: "Avançado" },
  { value: 30, color: "#46BFBD", label: "Senior" },
  { value: 60, color: "#F7464A", label: "Iniciante" }
];

export default [
  // Capa
  <Slide
    bgImage={images.node}
    notes="Quem sou eu, onde trabalho, credenciais, links"
  />,

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

  // Demografia
  <Slide bgColor="black" notes="Falar sobre a demografia da palestra">
    <Heading textSize={80}>Demografia</Heading>
    <br />
    <Pie
      data={data}
      options={{ animateRotate: false }}
      width="350"
      height="380"
    />
    {data.map(d => (
      <Code textColor="white" bgColor={d.color} style={{ margin: 4 }}>
        {d.label}
      </Code>
    ))}
  </Slide>,

  // Surgimento do JavaScript
  <Slide>
    <Notes>
      Como começou o javascript. LiveScript, mas pra pegar carona java,
      javascript em 10 dias. Fácil de usar.
    </Notes>
    <Image src={images.netscape} width="400" />
    <Heading fit>Surgimento do JavaScript</Heading>
    <List>
      <ListItem>Criado por Brendan Eich em 1995</ListItem>
      <ListItem>Chumbeta do Java</ListItem>
      <ListItem>Fácil de usar, para iniciantes</ListItem>
      <ListItem>Padronizado (ECMA)</ListItem>
      <ListItem>Construída em 10 dias</ListItem>
    </List>
  </Slide>,

  // IE horrível
  <Slide>
    <Image src={images.ie} style={{ padding: 0, margin: 0 }} />
  </Slide>,

  // Surgimento do Chrome/V8
  <Slide>
    <Notes>Surgimento do Chrome...</Notes>
    <Image src={images.chrome} width="150" />
    <br />
    <Heading textSize={70}>Surgimento do Chrome</Heading>
    <List>
      <ListItem>Criado pelo Google em 2008</ListItem>
      <ListItem>Navegador "sem frisos"</ListItem>
      <ListItem>Para sites mais pesados (Gmail)</ListItem>
    </List>
  </Slide>,

  // ...e do V8
  <Slide>
    <Image src={images.v8} width="150" />
    <Heading textSize={70}>...e do Chrome V8</Heading>
    <br />
    <List>
      <ListItem>Novo engine de JavaScript</ListItem>
      <ListItem>Feito em C++</ListItem>
      <ListItem>Muito rápido!</ListItem>
    </List>
  </Slide>,

  // Testar o V8
  <Slide bgImage={images.browserjs} />,

  // Surgimento do Node.js
  <Slide>
    <iframe
      title="node-presentation"
      width="380"
      height="215"
      src="https://www.youtube.com/embed/ztspvPYybIY"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
    <br />
    <Heading textSize={70}>Surgimento do Node.js</Heading>
    <List>
      <ListItem>Ryan Dahl na JSConf 2009</ListItem>
      <ListItem>Standalone V8</ListItem>
      <ListItem>Fs, http, process</ListItem>
      <ListItem>CommonJS modules</ListItem>
      <ListItem>
        Feito para servidor{" "}
        <span role="img" aria-label="not really">
          😏
        </span>
      </ListItem>
    </List>
  </Slide>,

  // Testar o console
  <Slide bgImage={images.termjs} />,

  // NPM
  <Slide>
    <Heading textSize={70}>NPM: seu melhor amigo</Heading>
    <Code>$ npm init</Code>
    <Layout
      style={{
        backgroundImage: `url('${images.bestFriend}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 300,
        width: 400,
        margin: "auto"
      }}
    >
      <Image src={images.nodeLogo} height={100} />
      <Fill />
      <Image src={images.npmLogo} height={80} />
    </Layout>
  </Slide>,

  // Package.json
  <Slide>
    <CodePane lang="js" textSize={18} source={"// package.json"} />
    <CodePane lang="json" textSize={18} source={packageJson} />
  </Slide>,

  // Module counts
  <Slide bgColor={"tertiary"} progressColor={"primary"}>
    <Image src={images.mc} />
  </Slide>,

  // Diversos outros projetos
  <Slide>
    <Heading fit>Onde usar esses Pacotes?</Heading>
  </Slide>,

  // Server
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.server} />
  </Slide>,

  // Web
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.web} />
  </Slide>,

  // Desktop
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.desktop} />
  </Slide>,

  // Mobile
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.mobile} />
  </Slide>,

  // IOT
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.iot} />
  </Slide>,

  // Misc
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.misc} />
  </Slide>,

  // PreFinal
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.prefinal} />
  </Slide>,

  // PreFinal
  <Slide bgColor={"tertiary"} progressColor={"primary"} transition={["fade"]}>
    <Image src={images.final} />
  </Slide>,

  // Good bye
  <Slide bgColor="black" transition={["fade"]}>
    <Heading fit textFont="Lobster Two">
      Obrigado
    </Heading>
  </Slide>
];
