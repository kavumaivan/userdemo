interface geocordinate {
  lat: number;
  lng: number
};

export default interface  Address {
      street: string;
      suite?: string
      city: string;
      zipcode: number;
      geo?: geocordinate;
}