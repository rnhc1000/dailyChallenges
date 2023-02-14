
let obj = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
    '©': '&copy;',
    '®': '&reg;'
}

console.log(obj)

function convertHTML(str) {
    let obj = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
        '©': '&copy;',
        '®': '&reg;'
    }

    let regex = /([<>&"'])/g;
    return str.replace(regex, match => obj[match]);

}

convertHTML("Dolce & Gabbana");

function convertHTMLX(str) {
    let char = null;
    if (str.includes('&')) {
        char = '&';
    } else if (str.includes('<')) {
        char = '<';
    } else if (str.includes('>')) {
        char = '>';
    } else if (str.includes('"')) {
        char = '"';
    } else if (str.includes("'")) {
        char = "'";
    }
    console.log(char)

    if (char === null) return str;
    // let regex = /`${char}`/g;
    // console.log(regex)
    let a = str.replaceAll(char, obj[char]);
    console.log(a)
    return a;
}

console.log(convertHTMLX("abc"));

function convertXHTMLX(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}

// test here
console.log(convertXHTMLX("Dolce & Gabbana"));