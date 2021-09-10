import React from "react";
import Company from "./CompanyInterface";
import "./company.scss";

interface CompanyComponentProps {
  company: Company | undefined;
  shortDesc: boolean;
}

const CompanyCard: React.FC<CompanyComponentProps> = (props) => {
  return (
    <div className="company">
      {props.shortDesc && <b className="header">{props.company?.name} </b>}

      {!props.shortDesc && (
        <>
          {" "}
          <p className="catchPhase">
            <i className={"data"}> {props.company?.catchPhrase}</i>
          </p>
          <p className={"bs"}> {props.company?.bs}</p>
        </>
      )}
    </div>
  );
};

export default CompanyCard;
