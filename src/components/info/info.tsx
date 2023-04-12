import Markdown from "marked-react";
import "./info.css";

const Info = (props) => {

  if (props == null || props.info == undefined) {
    return;
  }

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Info</h5>
        {props.info != null ? (
          <Markdown>{props.info.description}</Markdown>
        ) : null}

        <div className="d-flex justify-content-between align-items-start w-100">
          <a href={props.info.license.url} target="_blank" rel="noreferrer">
            {props.info.license.name}
          </a>
          <a href={props.info.termsOfService} target="_blank" rel="noreferrer">
            Terms of service
          </a>
          <a
            href={"mailto:" + props.info.contact.email}
            target="_blank"
            rel="noreferrer"
          >
            Contact the team
          </a>
        </div>
      </div>
    </div>

    // <div className="info" data-testid="Info">
    //   Info Component
    // </div>
  );
};

export default Info;
