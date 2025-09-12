export default class ResponseModel<T extends any | Object | Array<Object>> {
  public errors: any;
  constructor(
    public data: T,
    public message: string = "",
    public success: boolean = true,
    errors: any = undefined
  ) {
    if (errors) {
      this.errors = errors;
    }
  }

  static success<T>(data: T, message: string = "Data Fetched Successfully!") {
    return new this<T>(data, message, true);
  }

  static fail(message: string = "something went wrong!", errors: any = undefined) {
    if (typeof errors === "string") {
      errors = [errors];
    }
    if (errors && !("length" in errors)) {
      errors = [errors];
    }
    return new this(null, message, false, errors);
  }
}
