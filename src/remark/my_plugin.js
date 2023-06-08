const visit = require('unist-util-visit');
const fs = require('fs')
let building_string = ""
let last_idx = 0
let matches

let i = 0;

const plugin = (options) => {
    const chord_syntax = /\(!([a-zA-Z#]+?)\)/g
    // console.log('inside myplugin')
    const transformer = async (ast) => {
        // await fs.writeFile("ast.json", JSON.stringify(ast))
        visit(ast, 'paragraph', (node) => {
            // visit each child of the paragraph type
            for(child of node.children){
                // If the child is a text node
                if(child.type == "text"){
                    // Find all the matching strings
                    matches = [...child.value.matchAll(chord_syntax)]
                    last_idx = 0
                    matches.forEach(function (match) {
                        building_string += match[1].padStart(match.index - last_idx)
                        last_idx = match.index + match[0].length + 1
                    })
                    // Delete the string
                    child.value.replaceAll(chord_syntax, "")

                    // Add the new string
                    if(building_string !== ""){
                        node.children.unshift({
                            type: "chords",
                            value: building_string
                        })
                        building_string = ""
                    }
                }

            }
        });
        fs.writeFile(`ast_modified_${i}`, JSON.stringify(ast))
        i++;


    };
    return transformer;
};

module.exports = plugin;