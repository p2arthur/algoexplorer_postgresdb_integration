import React from 'react';
import ExpandablePanel from './ExpandablePanel';

function CreatorItem({ creator }) {


    const header = <div>{creator.name}</div>

    return <ExpandablePanel header={header}>a</ExpandablePanel>

}

export default CreatorItem;