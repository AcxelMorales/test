export interface InLogin {
  code:    number;
  status:  string;
  message: string;
  data:    Data;
  errors:  Error[];
  error:   string;
}

export interface Data {
  token:         string;
  statusAccount: string;
}
