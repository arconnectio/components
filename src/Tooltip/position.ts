export type Position = "top" |
  "topStart" |
  "topEnd" |
  "left" |
  "leftStart" |
  "leftEnd" |
  "bottom" |
  "bottomStart" |
  "bottomEnd"| 
  "right" |
  "rightStart" |
  "rightEnd";

export interface TooltipPosition {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  transform?: string;
}

export function getPosition(position: Position): TooltipPosition {
  const positions: Record<Position, TooltipPosition> = {
    top: {
      bottom: "115%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "115%",
      left: "0"
    },
    topEnd: {
      bottom: "115%",
      right: "0"
    },
    bottom: {
      top: "115%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "115%",
      left: "50%"
    },
    bottomEnd: {
      top: "115%",
      right: "0"
    },
    left: {
      top: "50%",
      right: "115%",
      transform: "translate(0, -50%)"
    },
    leftStart: {
      top: "0",
      right: "115%"
    },
    leftEnd: {
      bottom: "0",
      right: "115%"
    },
    right: {
      top: "50%",
      left: "115%",
      transform: "translate(0, -50%)"
    },
    rightStart: {
      top: "0",
      left: "115%"
    },
    rightEnd: {
      bottom: "0",
      left: "115%"
    },
  };

  return positions[position];
}

export function getArrowPosition(position: Position) {
  let style = "";

  if (position.startsWith("top")) {
    style += "bottom";
  } else if (position.startsWith("bottom")) {
    style += "top";
  } else if (position.startsWith("right")) {
    style += "left";
  } else {
    style += "right";
  }

  style += ": -8px;\n";

  if (position.startsWith("top") || position.startsWith("bottom")) {
    style += "left: 50%;\n";
    style += "transform: translate(-50%, 0);";
  } else {
    style += "top: 50%;\n";
    style += "transform: translate(0, -50%);";
  }

  return style;
}