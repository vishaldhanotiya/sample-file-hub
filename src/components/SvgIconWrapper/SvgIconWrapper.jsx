const SvgIconWrapper = ({ Icon, width = 24, height = 24, color = "currentColor" }) => (
  <span style={{ color }}>
    <Icon width={width} height={height} fill={color} />
  </span>
);

export default SvgIconWrapper;