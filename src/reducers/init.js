const quizes = [
    {
        title: 'Тестовый тест',
        cover: './static/cover1.jpg',
        inner: `"Разведопрос: Трудно быть русским" - книга о людях компетентных. Дмитрий Пучков беседует со специалистами - историками, журналистом, ополченцем и исследователем религий - грамотными вопросами направляя разговор в русло дачи толковых показаний.
        Историк Борис Юлин расскажет, как создавался Майдан и как за скачущими идеалистами следом приходят вооружённые экстремисты.
        Ополченец Николай сообщит, что видел своими глазами на Украине.
        Историк Александр Скробач прояснит вопрос о Киевской Руси и древних украх.'`,
        questions: [
            {
                cover: './static/q1.jpg',
                title: 'NAMFNklsa dK;AS JD?',
            },
            {
                cover: './static/q2.jpg',
                title: 'W aslkdj ODSJ lk j?',
            },
            {
                cover: './static/q3.jpg',
                title: 'Mhhhh?',
            },
            {
                cover: './static/q4.jpg',
                title: 'Owp pasdp x?',
            }
        ],
        results: [
            {
                cover: './static/r1.jpg',
                title: 'R1',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r2.jpg',
                title: 'R2',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r3.jpg',
                title: 'R3',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r4.jpg',
                title: 'R4',
                inner: 'aj askd;j ;asld qwm,. m'
            }
        ]
    },
    {
        title: 'Тестовый тест(1)',
        inner: 'inner(1)',
        questions: [
            {
                cover: './static/q1.jpg',
                title: 'NAMFNklsa dK;AS JD?',
            },
            {
                cover: './static/q2.jpg',
                title: 'W aslkdj ODSJ lk j?',
            },
            {
                cover: './static/q3.jpg',
                title: 'Mhhhh?',
            },
            {
                cover: './static/q4.jpg',
                title: 'Owp pasdp x?',
            }
        ],
        results: [
            {
                cover: './static/r1.jpg',
                title: 'R1',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r2.jpg',
                title: 'R2',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r3.jpg',
                title: 'R3',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r4.jpg',
                title: 'R4',
                inner: 'aj askd;j ;asld qwm,. m'
            }
        ]
    },
    {
        title: 'Тестовый тест(2)',
        inner: 'inner(2)',
        questions: [
            {
                cover: './static/q1.jpg',
                title: 'NAMFNklsa dK;AS JD?',
            },
            {
                cover: './static/q2.jpg',
                title: 'W aslkdj ODSJ lk j?',
            },
            {
                cover: './static/q3.jpg',
                title: 'Mhhhh?',
            },
            {
                cover: './static/q4.jpg',
                title: 'Owp pasdp x?',
            }
        ],
        results: [
            {
                cover: './static/r1.jpg',
                title: 'R1',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r2.jpg',
                title: 'R2',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r3.jpg',
                title: 'R3',
                inner: 'aj askd;j ;asld qwm,. m'
            },
            {
                cover: './static/r4.jpg',
                title: 'R4',
                inner: 'aj askd;j ;asld qwm,. m'
            }
        ]
    }
];

export const testRedc = (state = quizes, action) => {
    switch(action.type) {
        case 'ADD_QUIZ':
            state.push(action.content);
            return state;
        default:
            return state;
    }
}