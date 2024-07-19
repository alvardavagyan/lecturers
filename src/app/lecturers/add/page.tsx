import { handleAdd } from "@/app/lib/actions/lecturer-actions";

export default function Page(){
    return <div>
    <h1 className="is-size-4">Add Lecturer</h1>
    <div className="columns">
            <div className="is-two-fifth my-4">
                <form className="box" action={handleAdd}>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="name"
                            placeholder="enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="surname"
                            placeholder="enter a surname"
                        />
                    </div>
                    <div className="field my-4">
                        <input
                            type="text"
                            className="input is-primary"
                            name="salary"
                            placeholder="enter a salary"
                        />
                    </div>
                    <div className="field my-4">
                        <button className="button is-danger">submit</button>
                    </div>
                </form>
            </div>
        </div>
     
    </div>
}