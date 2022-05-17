export const capitalize = (text: string) => {
    let capitalized : string = "";

    if (text) {
        capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    }

    return capitalized; 
}