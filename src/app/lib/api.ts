import Database from "better-sqlite3"
 
export interface ILecturer {
    id: number
    name: string
    surname: string
    salary: number
}

export type InputLecturer = Omit<ILecturer, 'id'>

const db = new Database("lecturers.db")



export const addLecturer = (lecturer: InputLecturer) => {
    db.prepare(`
        INSERT INTO lecturers(name,surname,salary)
        VALUES (@name, @surname, @salary)
        `).run(lecturer)
}
export const getAllLecturers = (): ILecturer[] => {
    return db.prepare(`
            SELECT * FROM lecturers
    `).all() as ILecturer[]
}

export const getLecturerById=(id:number):ILecturer=>{
    return db.prepare(`
        SELECT * FROM lecturers WHERE id=?
        `).get(id) as ILecturer


}

export const updateLecturerById=(id:number,body:Partial<InputLecturer>)=>{
    return db
    .prepare("UPDATE lecturers set name=?, surname=?,salary=? WHERE id=?")
    .run(body.name,body.surname,body.salary,id)

}


















