export default class Utils {

    static jsonit(
        status: Boolean | Object = true,
        message: String | Object = '操作成功',
        data: Object = null)
    {
        if (typeof status !== 'boolean') {
            data = status
            status = true
        }

        if (!data && typeof message !== 'string') {
            data = message,
            message = '操作成功'
        }

        if (!status && message === '操作成功') {
            message = '操作失败'
        }

        return {
            status: status,
            message: message,
            data: data
        }
    }

}