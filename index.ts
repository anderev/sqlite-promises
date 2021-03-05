import { Database } from 'sqlite3'

export function openDatabase(filename:string):Promise<Database> {
    return new Promise((resolve, reject) => {
        const sqliteDatabase = new Database(filename, async (error) => {
            if (error) {
                reject(error)
            } else {
                resolve(sqliteDatabase)
            }
        });
    })
}

export function run(command:string, db:Database) : Promise<void> {
    return new Promise((resolve,reject) => {
        db.run(command, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

export function all(query: string, db:Database): Promise<any[]> {
    return new Promise((resolve, reject) => {
        db.all(query, (err: Error | null, rows: any[]) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

