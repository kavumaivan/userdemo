import React from "react";
import User from "./UserInterface";
import CompanyCard from "../company/CompanyCard";
import AddressCard from "../address/AddressCard";

interface UserComponentProps {
  user: User;
}

const UserCard: React.FC<UserComponentProps> = (props) => {
  return (
    <div className="user">
      <h3 className="user-name">{props.user.name} </h3>
      <div className={"field"}>
        <div className="user-company">
          <CompanyCard company={props.user.company} shortDesc={true} />
        </div>
      </div>
      <div className={"field"}>
        <div className="user-address">
          <AddressCard address={props.user?.address} />
        </div>
      </div>
      <div className={"field"}>
        <a
          href={`http://${props.user.website}`}
          rel="noreferrer"
          target="_blank"
        >
          <span className={"data"}> {props.user.website}</span>
        </a>
      </div>
      <div className={"field"}>
        <span className={"data"}> {props.user.email}</span>
      </div>
      <div className={"field"}>
        <span className={"data"}> {props.user.phone}</span>
      </div>
      <CompanyCard company={props.user.company} shortDesc={false} />
    </div>
  );
};

export default UserCard;
