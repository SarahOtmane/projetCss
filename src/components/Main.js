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
    const citations =[{
        text : "I've missed more than 9,000 shots in my career. I've lost almost 300 games.Twenty-six times I've been trusted to take the game-winning shot and missed.I've failed over and over and over again in my life. And that is why I succeed.",
        auteur: "MICHAEL JORDAN"
    },{
        text : "I've missed more than 9,000 shots in my career. I've lost almost 300 games.Twenty-six times I've been trusted to take the game-winning shot and missed.Lorem ipsum Odio donec lorem mus rhoncus fermentum ad nisl nostra natoque.acilisis varius morbi ornare.  ",
        auteur: "TEST JORDAN"
    }];

    const [index, setIndex] = useState(0);
    const [indexC, setIndexC] = useState(0);
    const [indexCit, setIndexCit] = useState(0);

    useEffect(() => {
        const affichMain = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1 < personnes.length ? prevIndex + 1 : 0));
            setIndexC((prevIndexC) => (prevIndexC + 1 < couleurs.length ? prevIndexC + 1 : 0));
            setIndexCit((prevIndexCit) => (prevIndexCit + 1 < citations.length ? prevIndexCit + 1 : 0));
        }, 3000);
    
        return () => clearInterval(affichMain);
    }, [index, personnes.length, couleurs.length, citations.length]);

    const currentPersonne = personnes[index];
    const couleur = couleurs[indexC];
    const citation = citations[indexCit];
    const progress = ((index + 1) / personnes.length) * 100;

    return (
        <main>
            <Row key={index} className={`border border-2 border-black`}>
                <Anniv prenom={currentPersonne.prenom} nom={currentPersonne.nom} couleur={couleur} />
                <Citation couleur={couleur} progress={progress} index={index+1} total={personnes.length} citation={citation} />
            </Row>
        </main>
    );
}

export default Main;
