import { getLecturerById } from "@/app/lib/api"
import { handleUpdate } from "@/app/lib/actions/lecturer-actions"


interface IProps{
    params:{id:number}
}

export default function EditPage({params}:IProps) {

    const lecturer=getLecturerById(params.id)
    return <>
        <p className="is-size-3">Edit Lecturer No. {params.id} </p>
        <div className="columns">
            <div className="is-two-fifth my-4">
                <form className="box" action={handleUpdate.bind(null,params.id)}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={lecturer.name}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                            defaultValue={lecturer.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="salary"
                            placeholder="enter a salary"
                            defaultValue={lecturer.salary}
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}