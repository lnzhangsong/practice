interface IBunketListResponce {
  statusCode: number;
  headers: object;
  Owner?: { DisplayName: string; ID: string };
  Buckets?: Array<{
    Name: String;
    Location: String;
    CreationDate: Date;
    BucketType: String;
  }>;
  DisplayName?: String;
}

interface IBunketListRequest {
  Region: string[] | string;
}

interface IBunketRequest {
  Bunket: string,
  Region: string,
  ACL?: string,
  GrantRead?: string,
  GrantWrite?: string,
  GrantReadAcp?: string,
  GrantWriteAcp?: string,
  GrantFullControl?: string,
}

interface IStatussResponce {
  err?: {
    statusCode: Number,
    header: Object,
  },
  data?: {
    statusCode: Number,
    header: object,
  }
}

export {
  IBunketListResponce,
  IBunketListRequest,
  IBunketRequest,
  IStatussResponce,
};
