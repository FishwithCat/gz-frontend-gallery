
import React from 'react';
import { CardModel } from "../../model/CardModel";
import styled from 'styled-components';


export interface CardProps {
    card: CardModel,
    className?: string
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="image">
                <img src={props.card.imgUrl} alt=""/>
            </div>
            <div className="footer">
                <a className="avatar" href="/">
                    <img src={props.card.avatarUrl} alt="" />
                </a>
                <div className="comments">
                    { props.card.comments.length > 0 && props.card.comments[0].comment}
                </div>
            </div>
        </div>
    )
}

export default styled(Card)`
    background-color: #ffffff;
    position: relative;
    overflow: hidden;

    > .image > img {
        width: 100%;
    }

    > .footer {
        display: flex;
        padding: 16px 15px;
        border-top: 1px solid #f2f2f2;

        > .avatar {
            width: 34px;
            height: 34px;

            > img {
                width: 100%;
            }
        }

        > .comments {
            height: 34px;
            padding-left: 10px;
        }
    }

    
`