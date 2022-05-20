
export interface User {
    completeNames:string;
    cellphone   :string;
    email       :string;
    password    :string
}


export interface IResponseUser {
    code:    number;
    status:  string;
    message: string;
    data:    DataUser;
    errors:  Error[];
    error:   string;
}
export interface DataUser {
    token:         string;
    statusAccount: string;
    envioOtp:      string;
}
export interface Error {
    value:    string;
    msg:      string;
    param:    string;
    location: string;
}
