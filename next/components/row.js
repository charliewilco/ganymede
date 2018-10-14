const OutletBlock = ({ title, image, description, link, children }) => (
  <li>
    <div>
      {image && <img src={image} alt={`Logo mark for ${title}`} />}
      <h4>{title}</h4>
    </div>
    <p>{description}</p>
    <style jsx>{`
      div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 32px;
      }

      h4 {
        font-weight: 400;
        font-size: 18px;
        line-height: 1.1;
      }

      p {
        font-weight: 300;
        font-size: 14px;
      }

      li {
        display: block;
        border-radius: 4px;
        border: 1px solid;
        padding: 16px;
        max-width: 320px;
        width: 100%;
        margin-bottom: 16px;
      }

      img {
        display: block;
        margin: 0 20px 0 0;
        width: auto;
        max-height: 40px;
      }
    `}</style>
  </li>
);

export default ({ title, data }) => (
  <div>
    <h3>{title}</h3>
    <ul>
      {data.map((d, i) => (
        <OutletBlock {...d} key={i} />
      ))}
    </ul>
    <style jsx>{`
      h3 {
        font-weight: 700;
        text-align: center;
        margin-bottom: 32px;
      }

      ul {
        padding: 0;
        margin: 0 auto 32px;
        max-width: 998px;
        list-style: none;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </div>
);
