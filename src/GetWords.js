
const getWords = (textfile) => {
    let textArray;
    fetch(textfile)
        .then((res) => res.text())
        .then((text) => {
            textArray = text.split("\"\n\"").filter((word) => word.length > 4)
        })
    return textArray
}

export default getWords