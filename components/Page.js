/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h2>I am the page component</h2>
      <p>{children}</p>
    </div>
  );
}

Page.prototypes = {
  children: PropTypes.any,
};
