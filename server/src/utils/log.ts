export interface ILog {
    location: String,
    action: String,
    data: any,
    date: Date,
    save: Function
}

export default async function log(location: String, action: String, data: any): Promise<ILog> {
    const now = new Date()
    const result = {
        location,
        action,
        data,
        date: now,
        save: () => {
            console.log(result.data.duration)
        }
    }
    console.log(result)
    return result
}