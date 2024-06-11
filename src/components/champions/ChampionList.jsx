import React from 'react';
import ChampionItem from './ChampionItem';
import championsData from '../../assets/api/Champion';
import { List } from '../../pages/champions/championstyle';

const ChampionList = () => {
    return (
        <List>
            {championsData.map((champion) => (
                <ChampionItem key={champion.id} champion={champion} />
            ))}
        </List>
    );
};

export default ChampionList;
