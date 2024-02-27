export type Position =
  | "top"
  | "topStart"
  | "topEnd"
  | "left"
  | "bottom"
  | "bottomStart"
  | "bottomEnd"
  | "right";

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
      bottom: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "133%",
      left: "0"
    },
    topEnd: {
      bottom: "133%",
      right: "0"
    },
    bottom: {
      top: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "133%",
      left: "0"
    },
    bottomEnd: {
      top: "133%",
      right: "0"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
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

  style += ": -15px;\n";

  if (position.startsWith("top") || position.startsWith("bottom")) {
    if (position.includes("Start")) {
      style += "left: 15px;";
    } else if (position.includes("End")) {
      style += "right: 15px;";
    } else {
      style += "left: 50%;\n";
      style += "transform: translate(-50%, 0);";
    }
  } else {
    if (position.includes("Start")) {
      style += "top: 15px;";
    } else if (position.includes("End")) {
      style += "bottom: 15px;";
    } else {
      style += "top: 50%;\n";
      style += "transform: translate(0, -50%);";
    }
  }

  return style;
}
