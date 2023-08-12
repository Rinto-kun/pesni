import re as re

example_text = "The qui#(Gjj)ck brown f#(G#m7)ox jumped o#(Pmmm)ver the lazy dog."
example_complete =  "The quick brown fox jumped over the lazy dog."
example_without =   "      G          G#m7       Pmmm              "


regexp = r"#\((.+?)\)"
reg = re.compile(regexp)

def algo(example_text):
    padding = 0
    ret = ""
    
    last_find = 0
    last_length = 0

    for match in reg.finditer(example_text):
        
        padding += max(match.start(0) - last_find - last_length - 1,0)
        
        ret += padding * " " + match.group(1) + " "

        last_find = match.end(0)
        last_length += len(match.group(0)) + 3

        # print(match.start(1))
        # print(match.group(1))
    return ret

algo_text = algo(example_text)
print(algo_text)
print(example_without)
print(example_complete)
# print(example_text)