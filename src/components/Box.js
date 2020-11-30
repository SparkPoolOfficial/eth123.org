const Box = ({
  id,
  className,
  style,
  children,
  onClick,
  ...props
}) => {

  const keys = {
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',

    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
  }

  const styleProps = [
    "display",
    "flex",
    "flexDirection",
    "justifyContent",
    "alignItems",
    "backgroundColor",
    "border",
    "borderTop",
    "borderRight",
    "borderBottom",
    "borderLeft",
    "borderColor",
    "borderRadius",
    "fontWeight",
  ];

  let spacingStyle = {};
  try {
    Object.keys(keys).forEach((key) => {
      if (props[key]) {
        spacingStyle[keys[key]] = props[key] * 8;
      }
    });
  } catch (e) {
  }

  let commonStyle = {};
  try {
    Object.keys(props).forEach((key) => {
      if (styleProps.indexOf(key) > -1) {
        commonStyle[key] = props[key];
      }
    })
  } catch (e) {
  }

  return (
    <div
      style={{
        ...commonStyle,
        ...spacingStyle,
        ...style,
      }}
      onClick={onClick}
      id={id}
      className={className}>
      {children}
    </div>
  )

}

export default Box;
