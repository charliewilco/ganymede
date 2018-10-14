import Ganymede from "ganymede";
import ColorSwatch from "./color-swatch";

export default class extends React.Component {
  static defaultProps = {
    grays: Ganymede.grays,
    colors: Ganymede.colors
  };

  getColors(colors) {
    return Object.keys(colors).map(color => <ColorSwatch color={colors[color]} key={color} />);
  }

  render() {
    const { grays, colors } = this.props;
    return (
      <div>
        {this.getColors(grays)}
        {this.getColors(colors)}
        <style jsx>{`
          div {
            min-height: 100%;
            z-index: 4;
            padding: 8px;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: space-around;
          }
        `}</style>
      </div>
    );
  }
}
