export default class extends React.Component {
  state = {
    visible: false
  };

  onHover = () => this.setState(state => ({ visible: !state.visible }));

  render() {
    const { visible } = this.state;
    const { color } = this.props;
    return (
      <figure onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
        <div />
        {visible && <figcaption>{color}</figcaption>}
        <style jsx>{`
          div {
            background-color: ${color};
            height: 20px;
            width: 20px;
            border-radius: 100%;
            margin: 0 auto;
            border: 1px solid ${color === "#022538" ? "#E6EEF3" : "transparent"};
          }

          figure {
            text-align: center;
            max-width: 24px;
            margin: 8px 0;
            padding: 0;
            position: relative;
          }

          figcaption {
            position: absolute;
            right: -84px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            font-family: SF Mono;
            font-weight: 300;
            line-height: 1;
            font-size: 14px;
            z-index: 50;
          }
        `}</style>
      </figure>
    );
  }
}
