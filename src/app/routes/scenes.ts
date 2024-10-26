export interface scenesOption {
    text: string;
    next: string;
    background?:string;
}
//https://placehold.co/400
export const scenes = {
    start: {
        text: 'Olá mundo.',
        background: 'https://placehold.co/400',
        options: [
            { text: '1', next: 'end' },
            { text: '2', next: 'end' },
        ]
    },
    end: {
        text: 'END',
        background:'https://placehold.co/400',
        options: []
    },
}