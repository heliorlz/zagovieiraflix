import React from "react";

function ButtonLink(props) {
  // props => {className: "o que receber", href="o que receber"}
  // props.children está recebendo o valor do ButtonLink

  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
