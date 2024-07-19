import { getAllLecturers } from "../lib/api";
import { LecturerList } from "../lib/components/lecturer-list";

export default function Page(){
    const list=getAllLecturers()
    return <>
    <h1 className="is-size-2">Lecturers</h1>
    <LecturerList lecturers={list}/>
    </>
}