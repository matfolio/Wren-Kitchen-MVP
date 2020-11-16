/* component for adding new sheep sheep to field */
import React, {useState} from 'react'

let setPayload = (name: string, gendar: string) => {
    return {name,gendar,brandable: false, breedable: false}
}

function AddSheep(props:any) {
    const [name, setName] = useState<any>("")
    const [gendar, setGendar] = useState<any>("")

    let handleGendar = (e: any) => {
        setGendar(e.target.value)
    }

    let handleName = (e: any) => {
        setName(e.target.value)
    }

    let handleClick = () => {
        // dispatch to store: payload and a reactive action type.
        props.dispatch({type: "ADD_SHEEP", payload: setPayload(name,gendar)})
        setGendar("");
        setName("");
    }
    return (
            <div className="modal fade" id="addsheepModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add sheep to field</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            
                        </div>
                        <div className="modal-body">
                            <label htmlFor="name">Sheep Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter Sheep Name" onChange={handleName} value={name} />

                            <label htmlFor="gendar">Gendar</label>
                            <select id="gendar" name="gendar" onChange={handleGendar} value={gendar}>
                                <option value="empty"></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success btn-block" onClick={handleClick} data-dismiss="modal">Add Sheep</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AddSheep
