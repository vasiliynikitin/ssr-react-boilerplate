import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { links } from '../../routes';


function Link(props) {
  return <RouterLink {...props} />;
}
Link.to = (page, ...params) => links[page](params);

export default Link;
