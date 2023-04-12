import { Accordion } from 'react-bootstrap';
import { Path } from '../../core/models/path.model';
import { PathMethods } from '../../core/models/pathmethods.model';
import Paths from '../paths/paths';
import './tags.css';

function groupPathsByTag(tagName, paths) {
  const pathList = Object.entries(paths).filter(
    ([, pathMethods]: [string, PathMethods]) => {
      const methods = Object.entries(pathMethods).filter(
        ([, path]: [string, Path]) => {
          const tags = path.tags.filter((t) => t === tagName);
          return tags.length > 0;
        }
      );
      return methods.length > 0;
    }
  );
  return pathList;
}

const Tags = (props) => {
  if (props == null || props.tags === undefined) {
    return;
  }

  const tagsList = props.tags.map((tag) => {
    return (
      <Accordion.Item eventKey={tag.name} key={tag.name}>
        <Accordion.Header>
          {tag.name} - {tag.description}
        </Accordion.Header>
        <Accordion.Body>
          <Paths data={groupPathsByTag(tag.name, props.paths)} />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return <Accordion>{tagsList}</Accordion>;
};

export default Tags;
