export interface scenesOption {
    text: string;
    next: string;
    background?:string;
}

const path = '../../assets/'

//https://placehold.co/400
export const scenes = {
    start: {
        text: 'Olá mundo. ',
        background: 'https://placewaifu.com/image/200',
        options: [
            { text: 'route1', next: 'route1' },
            { text: 'route2', next: 'route2' },
        ]
    },
    route1: {
        text: 'route1.',
        background: 'https://placewaifu.com/image/400',
        options: [
            { text: 'end', next: 'end' },
            { text: 'end', next: 'end' },
        ]
    },
    route2: {
        text: 'route2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quis assumenda accusamus totam, odio ut explicabo nulla quidem? Explicabo doloribus deleniti eaque soluta iusto, vitae rerum natus ipsam aperiam facere.',
        background: 'https://placewaifu.com/image/300',
        options: [
            { text: 'next', next: 'route3' },
            //{ text: 'end', next: 'end' },
        ]
    },
    route3: {
        text: 'route3. ',
        background: 'https://placewaifu.com/image',
        options: [
            { text: 'end', next: 'end' },
            { text: 'end', next: 'end' },
        ]
    },
    end: {
        text: 'END',
        background: path+'teste.jpg',
        options: []
    },
}