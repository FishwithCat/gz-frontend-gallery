import { CardModel } from "../model/CardModel"

export const GALLERY_CARDS = [
    {
        id: 1,
        imgUrl: '/logo512.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
    
    {
        id: 2,
        imgUrl: '/logo_large.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
    {
        id: 3,
        imgUrl: '/logo512.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
    {
        id: 4,
        imgUrl: '/logo512.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
    {
        id: 5,
        imgUrl: '/logo512.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
    {
        id: 6,
        imgUrl: '/logo512.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
    {
        id: 7,
        imgUrl: '/logo512.png',
        avatarUrl: '/logo192.png',
        comments: [
            { name: 'tester', comment: '今天是个好日子'}
        ]
    },
]


export const generateGalleryCarsStub = () => {
    return GALLERY_CARDS.map(item => new CardModel(item))
}