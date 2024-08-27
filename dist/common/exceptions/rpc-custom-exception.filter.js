"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcCustomExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let RpcCustomExceptionFilter = class RpcCustomExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const rpcError = exception.getError();
        if (typeof rpcError === 'object' && 'status' in rpcError && 'message' in rpcError) {
            const status = isNaN(+rpcError.status) ? 400 : +rpcError.status;
            return response.status(status).json(rpcError);
        }
        response.status(400).json({
            status: 400,
            message: rpcError
        });
    }
};
exports.RpcCustomExceptionFilter = RpcCustomExceptionFilter;
exports.RpcCustomExceptionFilter = RpcCustomExceptionFilter = __decorate([
    (0, common_1.Catch)(microservices_1.RpcException)
], RpcCustomExceptionFilter);
//# sourceMappingURL=rpc-custom-exception.filter.js.map