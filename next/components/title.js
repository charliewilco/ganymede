export default () => (
  <div>
    <img src='/static/images/ganymede-logo.svg' />
    <h1>Ganymede</h1>
    <style jsx>{`
      div {
        max-width: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin: 0 auto 5rem;
      }

      h1 {
        font-weight: 300;
        font-style: italic;
      }

      img {
        max-width: 7.5rem;
        margin-right: 1.25rem;
      }
    `}</style>
  </div>
)
