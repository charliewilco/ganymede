const Color = ({ color, v, onHover }) => (
  <div className='Cont' onMouseEnter={onHover} onMouseOut={onHover}>
    <div className='Orb' style={{ backgroundColor: color }} />
    {v && <span className='Tag'>{color}</span>}
    <style jsx>{`
      .Orb {
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 100%;
        margin: 0 auto 1rem;
      }
      .Tag {
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
      }

      .Cont {
        padding-bottom: 2rem;
        text-align: center;
        font-family: Roboto Mono;
        font-weight: 300;
        font-size: .875rem;
        max-width: 4rem;
        flex: 1;
        margin: 8px;
        padding: 0;
        position: relative;
      }
    `}</style>
  </div>
)

export default class extends React.Component {
  state = {
    visible: false
  }

  render () {
    const { visible } = this.state
    return (
      <Color
        v={visible}
        onHover={() => this.setState({ visible: !visible })}
        {...this.props}
      />
    )
  }
}
