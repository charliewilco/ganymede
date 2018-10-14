import { createElement, Component } from 'react'
import Link from 'next/link'
import Hex from '../components/hex'
import Title from '../components/title'
import Head from '../components/head'
import Row from '../components/row'
import Gnym from 'ganymede'
import { outlets, helpers } from '../outlets.json'
import { style, rehydrate } from 'glamor'

const App = ({ colors, grays }) => (
  <div>
    <Head title="Home" />
    <Hex children={colors} />
    <div className='Hero'>
      <Title />
      <Row title='Editors' data={outlets} />
      <Row title='Misc.' data={helpers} />
    </div>
    <style jsx>{`
        :global(*) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :global(html) {
          font-family: 'Roboto Mono'
        }

        :global(body) {
          height: 100%;
          margin: 0;
          background: ${Gnym.grays.gray0};
          color: ${Gnym.grays.gray6};
        }
    `}</style>
  </div>
)

export default class Ganyxt extends Component {



  render () {
    return <App />
  }
}
