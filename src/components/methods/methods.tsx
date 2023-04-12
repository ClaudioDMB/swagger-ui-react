import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import { Path } from '../../core/models/path.model';
import './methods.css';

const Methods = (props) => {

  const pathMethods = Object.entries(props.data).map(
    ([method, path]:[string, Path]) => {
      return (
        <Accordion.Item eventKey={method} key={method}>
          <Accordion.Header>{method}</Accordion.Header>
          <Accordion.Body>{path.summary}</Accordion.Body>
        </Accordion.Item>
      );
    }
  );

  return <Accordion>{pathMethods}</Accordion>;
}

export default Methods;
