import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "./ThemeProvider";

export function AnimatedCursorComponent() {
  const { theme } = useTheme();
  console.log("Current theme:", theme);

  const cursorColor = theme === "dark" ? "#ffffff" : "#ffffff";

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color={theme === "dark" ? "96, 165, 250" : "59, 130, 246"}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2.5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      outerStyle={{
        border: `2px solid ${cursorColor}`,
        mixBlendMode: "normal",
      }}
      innerStyle={{
        backgroundColor: cursorColor,
        mixBlendMode: "normal",
      }}
    />
  );
}
