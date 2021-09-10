import React from 'react';
import Address from "./AddressInterface";
import "./Address.scss";

interface AddressComponentProps {
    address: Address | undefined;
  };

const AddressCard: React.FC<AddressComponentProps> = (props) => {
  return (
    <div className="address">
      <div className="line1">
          {`${props.address?.street} ${props.address?.suite}`} 
      </div>
      <div className="line2">
          {` ${props.address?.city} ${props.address?.zipcode}`} 
      </div> 
    </div>
  );
}

export default AddressCard;
