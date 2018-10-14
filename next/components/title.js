export default () => (
  <div>
    <img alt="Moons in orbit" src="/static/images/ganymede-logo.svg" />
    <h1>Ganymede</h1>
    <style jsx>{`
      div {
        max-width: 100%;
        padding: 80px 16px;
        text-align: center;
        margin: 0 auto;
      }

      h1 {
        font-weight: 300;
        font-size: 36px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
          sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }

      img {
        display: block;
        max-width: 120px;
        margin: 0 auto 20px;
      }
    `}</style>
  </div>
);
