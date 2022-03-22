interface IListObjectRequest {
  Bunket: string,
  Region: string,
  Prefix?: string,
  Delimiter?: string,
  Marker?: string,
  MaxKeys?: string,
  EncodingType?: string,
}

interface IListObjectResponce {
  err?: {
    statusCode: string,
    headers: string,
  },
  data?: {
    headers: string,
    statusCode: string,
    Name: string,
    Prefix: string,
    Marker: string,
    MaxKeys: string,
    Delimiter: string,
    IsTruncated: string,
    NextMarker: string,
    CommonPrefixes: [{
      Prefix: string,
    }],
    EncodingType: string,
    Contents: [{
      Key: string,
      ETag: string,
      Size: string,
      LastModified: string,
      Owner: {
        ID: string,
        DisplayName: string,
      },
      StorageClass: string,
    }]
  }
}

export {
  IListObjectRequest,
  IListObjectResponce,
};
