import Link from "next/link";
import Hex from "../components/hex";
import Title from "../components/title";
import Head from "../components/head";
import Row from "../components/row";
import Ganymede from "ganymede";
import { outlets } from "../outlets.json";

const App = ({ colors, grays }) => (
  <div>
    <Head title="Ganymede" />
    <main>
      <Hex children={colors} />
      <article>
        <Title />
        <Row title="Editors" data={outlets} />
      </article>
    </main>
    <style jsx>{`
      :global(html) {
        font-family: "SF Mono";
      }

      :global(body) {
        height: 100%;
        margin: 0;
        background: ${Ganymede.grays.gray0};
        color: ${Ganymede.grays.gray6};
      }

      main {
        height: 100%;
        font-family: "SF Mono";
        display: flex;
        justify-content: space-between;
      }

      article {
        width: 100%;
        padding-left: 36px;
      }
    `}</style>
  </div>
);

export default class Ganyxt extends React.Component {
  render() {
    return <App />;
  }
}
