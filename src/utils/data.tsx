const candyImages = {
    0: require('../assets/candies/blank.png'),
    1: require('../assets/candies/red.png'),
    2: require('../assets/candies/green.png'),
    3: require('../assets/candies/blue.png'),
    4: require('../assets/candies/purple.png'),
    5: require('../assets/candies/yellow.png'),
} as const;

type CandyKey = keyof typeof candyImages;

export const getCandyImage = (key: number) => candyImages[key as CandyKey];

export const gameLevels: GameLevels = {
    level1: {
        grid: [
            [null, 1, 3, 1, 5, null],
            [5, 1, 3, 1, 4, 3],
            [4, 5, 1, 3, 3, 1],
            [2, 1, 2, 4, 5, 1],
            [1, 2, 1, 1, 2, 5],
            [null, 3, 2, 1, 5, null],
        ],
        pass: 80,
        time: 30000
    },
    level2: {
        grid: [
            [null, null, 3, 1, 3, 2, 1],
            [null, null, 2, 3, 5, 4, 1],
            [4, 5, 1, 1, 5, 2, 5],
            [1, 2, 2, 3, 4, 3, null],
            [4, 3, 2, 1, 1, 2, null],
        ],
        pass: 120,
        time: 35000
    },
    level3: {
        grid: [
            [1, 3, 2, 5, 3, 1, 4],
            [1, 2, 1, 3, 5, 1, 3],
            [4, 1, 5, 1, 2, 4, 2],
            [5, 3, 4, 1, 1, 2, 1],
            [4, 3, 2, 5, 1, 2, 4],
        ],
        pass: 150,
        time: 40000
    },
    level4: {
        grid: [
            [1, 3, 1, 4, 3, 2, 1],
            [4, 5, 2, 1, 2, 3, 5],
            [1, 3, 5, 1, 4, 2, 4],
            [2, 3, 1, 5, 4, 1, 2],
            [5, 1, 4, 2, 3, 5, 1],
            [3, 1, 2, 1, 5, 4, 3],
            [4, 2, 3, 1, 2, 4, 5],
            [1, 2, 5, 3, 1, 2, 1],
        ],
        pass: 200,
        time: 45000
    },
    level5: {
        grid: [
            [1, 4, 2, 3, 5, 1, 3],
            [2, 3, 1, 4, 1, 2, 5],
            [4, 1, 2, 3, 4, 5, 1],
            [5, 2, 1, 2, 3, 1, 3],
            [2, 4, 3, 1, 5, 4, 2],
            [1, 2, 3, 4, 1, 5, 2],
            [3, 5, 1, 2, 4, 3, 1],
            [4, 1, 5, 3, 2, 4, 1],
            [5, 2, 3, 4, 1, 3, 2],
        ],
        pass: 250,
        time: 50000
    },
    level6: {
        grid: [
            [3, 2, 4, 1, 5, 1, 2],
            [5, 1, 2, 3, 2, 5, 1],
            [4, 1, 5, 3, 4, 2, 3],
            [2, 3, 4, 5, 3, 1, 4],
            [5, 1, 2, 4, 1, 2, 5],
            [1, 2, 3, 5, 4, 1, 3],
            [3, 5, 1, 2, 5, 4, 1],
            [4, 2, 5, 1, 3, 2, 4],
            [2, 3, 4, 1, 5, 3, 2],
        ],
        pass: 280,
        time: 55000
    },
    level7: {
        grid: [
            [3, 5, 1, 2, 4, 3, 5],
            [2, 1, 4, 1, 5, 4, 3],
            [4, 3, 2, 5, 1, 3, 4],
            [1, 2, 3, 1, 4, 2, 1],
            [5, 4, 1, 2, 5, 3, 2],
            [2, 1, 4, 3, 2, 5, 4],
            [3, 5, 1, 4, 3, 1, 2],
            [4, 2, 5, 1, 4, 5, 3],
            [2, 3, 1, 2, 5, 4, 1],
        ],
        pass: 350,
        time: 60000
    },
    level8: {
        grid: [
            [1, 3, 5, 4, 1, 3, 4],
            [3, 2, 5, 1, 4, 2, 3],
            [4, 1, 3, 5, 2, 1, 5],
            [2, 4, 1, 3, 5, 4, 2],
            [5, 1, 3, 4, 2, 5, 1],
            [3, 2, 1, 5, 4, 1, 2],
            [1, 4, 2, 5, 1, 3, 4],
            [2, 5, 3, 1, 4, 2, 3],
            [4, 3, 1, 2, 5, 1, 2],
            [5, 4, 2, 3, 1, 2, 5],
        ],
        pass: 380,
        time: 65000
    },
    level9: {
        grid: [
            [2, 4, 3, 5, 2, 1, 3],
            [3, 1, 2, 4, 3, 5, 1],
            [4, 2, 5, 1, 2, 3, 4],
            [5, 3, 1, 2, 4, 3, 5],
            [2, 4, 3, 5, 1, 2, 3],
            [3, 1, 4, 2, 5, 4, 1],
            [4, 2, 1, 3, 5, 2, 4],
            [5, 3, 2, 4, 1, 5, 2],
            [2, 5, 3, 1, 4, 3, 1],
            [3, 4, 5, 2, 1, 2, 3],
        ],
        pass: 400,
        time: 70000
    },
    level10: {
        grid: [
            [null, null, null, 2, null, null, null],
            [null, null, 1, 5, 3, null, null],
            [null, 2, 5, 2, 4, 1, null],
            [2, 5, 3, 4, 2, 1, 3],
            [4, 1, 2, 5, 3, 2, 1],
            [1, 3, 5, 4, 1, 5, 4],
            [3, 4, 1, 2, 5, 2, 1],
            [null, 5, 3, 1, 2, 4, null],
            [null, null, 2, 3, 1, null, null],
            [null, null, null, 1, null, null, null],
        ],
        pass: 500,
        time: 75000
    },
};

export const initialLevelData = [
    { id: 1, unlocked: true, completed: false, highScore: 0 },
    { id: 2, unlocked: false, completed: false, highScore: 0 },
    { id: 3, unlocked: false, completed: false, highScore: 0 },
    { id: 4, unlocked: false, completed: false, highScore: 0 },
    { id: 5, unlocked: false, completed: false, highScore: 0 },
    { id: 6, unlocked: false, completed: false, highScore: 0 },
    { id: 7, unlocked: false, completed: false, highScore: 0 },
    { id: 8, unlocked: false, completed: false, highScore: 0 },
    { id: 9, unlocked: false, completed: false, highScore: 0 },
    { id: 10, unlocked: false, completed: false, highScore: 0 },
]