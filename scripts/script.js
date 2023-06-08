function convertString(inputString) {
    const chord_syntax = /\(!([^)]+)\)/g;

    const matches = [...inputString.matchAll(chord_syntax)]

    // let last_strlength = 2
    let last_idx = 0
    let last_strlength = 0
    let acc = 0
    // console.log(matches)

    let convertedString = '';

    for(let i =0; i < matches.length; i++){
        const match = matches[i]
        const substring = match[1]
        const matchlen = match[0].length
        const grouplen = substring.length
        const index = match.index;
    
        const padLength = index - last_idx;
        last_idx = index
        last_strlength = grouplen

        // acc += matchlen - grouplen

        convertedString += ' '.repeat(padLength) + substring;
        console.log("padLength=",padLength, "matchlen=", matchlen, "grouplen=", grouplen,"index=", index,  "last_strlength=", last_strlength, "acc=", acc)
        // console.log(inputString.replace(chord_syntax, ''))
        // console.log(convertedString, "padding: ", padLength)
    }



    return convertedString + '\n' + inputString.replace(chord_syntax, '');
}

// Example usage:
console.log('The quick brown fox '.length, 'jumped o'.length, 'ver the lazy '.length)
console.log('Expected pad length:', 20, 7, 8)
const inputString = 'The (!1)quick (!2)brown (!3)fox jumped...';
//                  '                    B       MiDdd        p   '
//                  'The quick brown fox jumped over the lazy dog.'
const convertedString = convertString(inputString);
console.log(convertedString);
