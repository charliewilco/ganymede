export default ({ title, image, description, link, children }) => (
  <li>
    {image && <img src={image} />}
    <h4>{title}</h4>
    <p>{description}</p>
    <style jsx>{`
      li {
        display: block;
        padding: 1rem;
      }

      img {
        max-width: 5rem;
      }
    `}</style>
  </li>
)
