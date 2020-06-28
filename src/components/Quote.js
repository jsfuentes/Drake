import React from "react";
import PropTypes from "prop-types";

function Quote(props) {
  return <div className="_quote">{props.children}</div>;
}

Quote.propTypes = {
  children: PropTypes.any,
};

export default Quote;
