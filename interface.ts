export interface User {
    name: string,
    id: number
}

const user : User = {
    name: 'John Marker',
    id: 2020,
}

console.log(user)


//

interface squareConfig {
    color?: string,
    width?: number,
}

const createSquare = (config: squareConfig): {color: string, area: number} => {
    let newSquare = {color: 'red', area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

const newSquare = createSquare({color: 'green', width: 5});
console.log(newSquare)