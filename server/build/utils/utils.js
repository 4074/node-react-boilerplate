"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    static jsonit(status = true, message = '操作成功', data = null) {
        if (typeof status !== 'boolean') {
            data = status;
            status = true;
        }
        if (!data && typeof message !== 'string') {
            data = message,
                message = '操作成功';
        }
        if (!status && message === '操作成功') {
            message = '操作失败';
        }
        return {
            status: status,
            message: message,
            data: data
        };
    }
}
exports.default = Utils;
