import Gnym from 'ganymede'
import Color from './color'

export default () => (
  <div>
    {getColors(Gnym.grays)}
    {getColors(Gnym.colors)}
    <style jsx>{`
      div {
         display: flex;
         flex-wrap: wrap;
         text-align: center;
         justify-content: space-around;
         margin-bottom: 2rem;
      }
    `}</style>
  </div>
)


const getColors = (colors) => {
  let contents = []

  for(let x in colors) {
    contents.push(<Color color={colors[x]} key={x} />)
  }

  return contents
}
