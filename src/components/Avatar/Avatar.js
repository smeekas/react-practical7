import React from "react";
const Avatar = (props) => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};
export default React.memo(Avatar);
