const generateString = (): string => {
    const character: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortString = "";
    for (let i = 0; i < 6; i++) {
        shortString += character.charAt(Math.floor(Math.random() * character.length))
    }
    return shortString;
}

export { generateString }