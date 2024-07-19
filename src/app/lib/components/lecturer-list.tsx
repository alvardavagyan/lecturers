
import Link from "next/link"
import { ILecturer } from "../api"

interface Props {
    lecturers: ILecturer[]
}

export const LecturerList = ({ lecturers }: Props) => {

    return  <>
     <div className="columns">
        {
            lecturers.map(lecturer => <div className="column" key={lecturer.id}>
                <p>lecturer No. {lecturer.id}</p>
                <p>Name: {lecturer.name}</p>
                <p>Surname: {lecturer.surname}</p>
                <p>Salary: {lecturer.salary} AMD </p>
                <Link href={"/lecturers/edit/" + lecturer.id}>Edit</Link>
            </div>)
        }
    </div>
    </>
}