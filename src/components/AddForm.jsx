import { useState } from "react";

function AddForm(props) {

    const [formData, setFormData] = useState();

    function handleChange(e) {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    function handleSubmit() {
        
        props.addUser(formData);
    }

    return (
        <div className="form-control border mt-5">
            <input className="form-control mb-2" type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
            <input className="form-control" type="text" name="edad" placeholder="Edad" onChange={handleChange} />
            <button className="btn btn-primary m-1" onClick={handleSubmit}>Añadir</button>
        </div>
    );
}

export default AddForm;