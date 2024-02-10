import Anniv from "./Anniv";
import Citation from "./Citation";
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';

function Main() {
    const personnes = [
        { nom: "Richet", prenom: "Max" },
        { nom: "Otmane", prenom: "Sarah" }
    ];
    const couleurs = ['rose', 'vert', 'bleu'];

    const [index, setIndex] = useState(0);
    const [indexC, setIndexC] = useState(0);

    useEffect(() => {
        const affichMain = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1 < personnes.length ? prevIndex + 1 : 0));
            setIndexC((prevIndexC) => (prevIndexC + 1 < couleurs.length ? prevIndexC + 1 : 0));
        }, 3000);

        return () => clearInterval(affichMain);
    }, [index, personnes.length, couleurs.length]);

    const currentPersonne = personnes[index];
    const couleur = couleurs[indexC];
    const progress = ((index + 1) / personnes.length) * 100;

    return (
        <main>
            <Row key={index} className={`border border-2 border-black`}>
                <Anniv prenom={currentPersonne.prenom} nom={currentPersonne.nom} couleur={couleur} />
                <Citation couleur={couleur} progress={progress} index={index+1} total={personnes.length} />
            </Row>
        </main>
    );
}

export default Main;
