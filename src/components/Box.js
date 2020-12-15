const Box = ({
  id,
  className,
  style,
  children,
  onClick,
  ...props
}) => {

  const spacingKeys = {
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: ['ml', 'mr'],
    my: ['mt', 'mb'],

    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: ['pl', 'pr'],
    py: ['pt', 'pb'],
  }

  const styleProps = [
    "position",
    "display",
    "flex",
    "flexWrap",
    "flexDirection",
    "justifyContent",
    "alignItems",

    "width",
    "height",
    "fontWeight",
    "fontSize",
    "lineHeight",
    "textAlign",

    "color",
    "backgroundColor",

    "border",
    "borderTop",
    "borderRight",
    "borderBottom",
    "borderLeft",
    "borderColor",
    "borderRadius",
    "boxShadow",

    "wordBreak",
    "cursor",
    "userSelect",
  ];

  let spacingStyle = {};
  try {
    Object.keys(props).forEach((prop) => {
      if (spacingKeys[prop]) {
        if (/(x|y)/.test(prop)) {
          spacingKeys[prop].forEach((key) => {
            spacingStyle[spacingKeys[key]] = props[prop] * 8;
          })
        } else {
          spacingStyle[spacingKeys[prop]] = props[prop] * 8;
        }
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
