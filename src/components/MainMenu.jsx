import { useState } from "react";
import AddForm from "./AddForm";
import UserTable from "./UserTable";

function MainMenu() {

    const listaNombre = [
        // { id: 1, nombre: 'Chaleco', edad: 20 }
    ]

    const [lista, setLista] = useState(listaNombre);

    function addUser(user) {
        let newId = 1;
        if (lista.length > 0) {
            const ultimoValor = lista[lista.length - 1];
            newId = ultimoValor.id + 1
        }

        user.id = newId;
        setLista([...lista, user]);
    }

    return (
        <div className="container">
            <div>
                <AddForm addUser={addUser} />
            </div>
            <div>
                <UserTable lista={lista} />
            </div>
        </div>
    );
}

export default MainMenu;
