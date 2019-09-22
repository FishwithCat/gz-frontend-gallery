import React, { useMemo, useState } from 'react';
import { CardModel } from '../../model/CardModel';
import Card from '../card';
import styled from 'styled-components';
import classnames from 'classnames';
import Masonry, { MasonryOptions, MasonryPropTypes } from 'react-masonry-component';


export interface GalleryProps {
    cards: CardModel[],
    colNum: number,
    className?: string,
    children?: ChildNode
}

const masonryOptions: MasonryOptions = {
    transitionDuration: 1000,
    horizontalOrder: false,
    percentPosition: true
}

interface MemoMasonryProps extends MasonryPropTypes {
    children?: JSX.Element[]
}

const MemoMasonry = React.memo((props: MemoMasonryProps) => (
        <Masonry {...props}>
            {props.children}
        </Masonry>
    ), (prevProps, nextProps) => {
    return false
})

const Gallery: React.FC<GalleryProps> = React.memo((props) => {
    const [ layoutReady, setLayoutReady ] = useState(false)

    const colWidth = useMemo(() => calculateColWidth(props.colNum), [props.colNum])

    const childElement = props.cards.map(card => 
        <div key={card.id} className={classnames("gallery-cell", {'ready': layoutReady})} 
            style={{width: `${colWidth}%`}}
        >
            <Card card={card} />
        </div>
    )
    
    return (
        <div className={props.className}>
            <MemoMasonry options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
                onLayoutComplete={() => setLayoutReady(true)}
            >
                { childElement }
            </MemoMasonry>
        </div>
    )
}, (prevProps, nextProps) => true)

const calculateColWidth = (colNum: number): number => 100 / colNum


export default styled(Gallery)`
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px 5%;
    overflow-y: auto;

    .gallery-cell {
        padding: 10px;
        visibility: hidden;
        opacity: 0;

        &.ready {
            visibility: visible;
            opacity: 1;
            transition: opacity .3s ease-in;
        }
    }

`;