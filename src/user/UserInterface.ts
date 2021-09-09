import Address from "../address/AddressInterface"
import Company from "../company/CompanyInterface"
export default interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address?:Address;
    phone: string;
    website?: string;
    company?: Company;
  }