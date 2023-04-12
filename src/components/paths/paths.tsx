import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Methods from '../methods/methods';
import './paths.css';

const PathList = (props) => {

  const pathList: JSX.Element[] = [];

  props.data.forEach(element => {
    const pathName = element[0];
    const methods = element[1];
    pathList.push(
      <Accordion.Item eventKey={pathName} key={pathName}>
        <Accordion.Header>{pathName}</Accordion.Header>
        <Accordion.Body>
          <Methods data={methods} />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return <Accordion>{pathList}</Accordion>;
};

export default PathList;
