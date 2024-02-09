import Anniv from "./Anniv";
import Citation from "./Citation";

import Row from 'react-bootstrap/Row';

function Main(){
    const personnes = [{
        prenom: "Max",
        nom: "Richet"
    }];

    const color = 'rose';

    return(
        <main className="border border-2 border-black">
            {
                personnes.map((personne, index) => (
                    <Row key={index} className="d-flex flex-row">
                        <Anniv prenom={personne.prenom} nom={personne.nom} color={color} />
                        <Citation color={color} />
                    </Row>
                ))
            }
        </main>
    )
}

export default Main;