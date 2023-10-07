import * as React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <p>404 Page not found</p>
    <Link to="/">Go to HomePage</Link>
  </div>
);

export default PageNotFound;
