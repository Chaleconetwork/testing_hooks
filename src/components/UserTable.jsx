import React from "react";

function UserTable(props) {

    console.log(props)

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.lista.map(i => (
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.nombre}</td>
                            <td>{i.edad}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    );
}

export default UserTable;