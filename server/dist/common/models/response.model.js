"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseModel {
    data;
    message;
    success;
    errors;
    constructor(data, message = "", success = true, errors = undefined) {
        this.data = data;
        this.message = message;
        this.success = success;
        if (errors) {
            this.errors = errors;
        }
    }
    static success(data, message = "Data Fetched Successfully!") {
        return new this(data, message, true);
    }
    static fail(message = "something went wrong!", errors = undefined) {
        if (typeof errors === "string") {
            errors = [errors];
        }
        if (errors && !("length" in errors)) {
            errors = [errors];
        }
        return new this(null, message, false, errors);
    }
}
exports.default = ResponseModel;
//# sourceMappingURL=response.model.js.map