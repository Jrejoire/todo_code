import { languageInterface } from "../interfaces/interfaces";

interface dataInterface {
    languages: languageInterface[],
}

const data: dataInterface = {
    languages: [
        {
            name: "JavaScript",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png"
        },
        {
            name: "Python",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"
        },
        {
            name: "Java",
            logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png"
        },
        {
            name: "TypeScript",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
        },
        {
            name: "C#",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
        },
        {
            name: "C++",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        },
        {
            name: "PHP",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
        },
        {
            name: "C",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png"
        },
        {
            name: "Go",
            logo: "https://go.dev/images/go-logo-blue.svg"
        },
        {
            name: "Kotlin",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/2048px-Kotlin_Icon.svg.png"
        },
        {
            name: "Rust",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png"
        },
    ]
}

export default data;