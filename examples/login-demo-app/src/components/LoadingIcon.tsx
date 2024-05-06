import React from "react";
import { createStyles, keyframes } from "antd-style";
export const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});
const useStyles = createStyles({
  container: {
    border: `2px solid rgba(0,0,0,0.3)`,
    borderTopColor: "#0CFFD3",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    animation: `${spin} 1s linear infinite`,
  },
});
export type LoadingIconProps = {};
const LoadingIcon: React.FC<LoadingIconProps> = props => {
  const { styles } = useStyles();
  return <div className={styles.container}></div>;
};

export default LoadingIcon;
