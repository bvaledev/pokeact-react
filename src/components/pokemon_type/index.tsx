import { useEffect, useRef, useState } from 'react';
import './styles.scss';

type PokemonTypeProps = {
    name: string;
}

function PokemonTypes({ name }: PokemonTypeProps) {
    let [icon, setIcon] = useState('');

    useEffect( () => {
        async function loadIcon(){
            let importedIcon = await import(`../../assets/pokemon/types/${name}.svg`);
            setIcon(importedIcon.default);
        }
        loadIcon();
    }, []);

    return (
        <li key={name}>
            <img src={icon} alt={name} title={name} className="pokemon-type-icon" />
        </li>
    );
}

export default PokemonTypes;