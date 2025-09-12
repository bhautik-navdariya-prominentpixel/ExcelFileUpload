export default class ResponseModel<T extends any | Object | Array<Object>> {
    data: T;
    message: string;
    success: boolean;
    errors: any;
    constructor(data: T, message?: string, success?: boolean, errors?: any);
    static success<T>(data: T, message?: string): ResponseModel<T>;
    static fail(message?: string, errors?: any): ResponseModel<null>;
}
//# sourceMappingURL=response.model.d.ts.map