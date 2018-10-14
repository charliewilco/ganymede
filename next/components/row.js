const Block = ({ title, image, description, link, children }) => (
  <li className='Item'>
    <div>
      {image && <img src={image} />}
      <h4>{title}</h4>
    </div>
    <p>{description}</p>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 2rem;
      }

      h4 {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.1;
      }

      p {
        font-family: 'Roboto Mono';
        font-weight: 300;
        font-size: .875rem;
      }

      .Item {
        font-family: 'Roboto Mono';
        display: block;
        padding: 1rem;
        max-width: 15rem;
        width: 100%;
      }

      img {
        display: block;
        margin: 0 1.25rem 0 0;
        width: auto;
        max-height: 2.5rem;
      }
    `}</style>
  </li>
)


export default ({ title, data }) => (
  <div>
    <h3>{title}</h3>
    <ul className='Row'>
      {
        data.map((d, i) => <Block {...d} key={i} />)
      }
    </ul>
    <style jsx>{`
      h3 {
        font-weight: 300;
        text-align: center;
        letter-spacing: 2px;
        font-style: italic;
        margin-bottom: 1rem;
      }

      .Row {
        padding: 0;
        margin: 0 auto 2rem;
        max-width: 68rem;
        list-style: none;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </div>
)
