"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArrayBuffer = toArrayBuffer;
function toArrayBuffer(buffer) {
    const arrayBuffer = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i] ?? 0;
    }
    return arrayBuffer;
}
//# sourceMappingURL=buffer.helper.js.map