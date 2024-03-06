# JSON Sculptor 🖌️

Welcome to JSON Sculptor! This TypeScript library is your skilled artisan for sculpting JSON strings into beautifully crafted JavaScript objects. Whether you're chiseling away at simple JSON structures or molding intricate designs of nested objects and arrays, JSON Sculptor will shape your data with finesse and precision.

## Features 🌟

- **Seamless Transformation**: Simply entrust your JSON string to JSON Sculptor, and it will deftly mold it into a JavaScript object.
- **Artistry in Nesting**: No tangled threads to unravel! Nest objects within objects, arrays within arrays, or any combination thereof, and JSON Sculptor will sculpt with meticulous attention to detail.
- **Error Crafting**: Encounter imperfections in your JSON? JSON Sculptor will keenly detect and provide clear instructions to refine and perfect your data.

## Installation 🛠️

### Obtaining Source Files

1. Clone the JSON Sculptor repository to your local machine:

   ```bash
   git clone https://github.com/Basma-90/json-sculptor.git
Copy the json-sculptor directory to your project.

Using npm with Direct Repository Link

If you prefer managing dependencies with npm and want to integrate JSON Sculptor into your project using a direct link to the repository:

Add the following entry to your package.json file:

json

    "dependencies": {
        "json-sculptor": "git+https://github.com/Basma-90/json-sculptor.git"
    }

Run npm install in your project directory to install JSON Sculptor and its dependencies.
Usage 🚀

Crafting your JSON masterpieces with JSON Sculptor is an artistic endeavor! Here's a quick TypeScript example to get you started:

typescript

    import { Lexer, Parser } from 'json-sculptor';

    const jsonString: string = '{"name": "John", "age": 30, "isStudent": true}';
    const lexer: Lexer = new Lexer(jsonString);
    const parser: Parser = new Parser(lexer);
    const parsedObject: any = parser.parseJSON();

    console.log(parsedObject);

