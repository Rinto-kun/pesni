import os

og_dir = "/Users/Matey/project/pesni/archive/docs"

available_chords = sorted(os.listdir("/Users/Matey/project/pesni/static/chords"))
available_pdfs = sorted(os.listdir("/Users/Matey/project/pesni/static/pdf"))



for file in os.listdir(og_dir):
    
    print("Processing file", file)
    if not file.endswith(".md"): continue
    with open(og_dir +"/" + file, encoding="utf8") as f:
        contents = f.read()
        
    song_no = int(file.split(".")[0])
    contents+="\n\n"
    try:
        pdf_filename = [pp for pp in available_pdfs if pp.endswith(".pdf") and pp.startswith(f"{song_no}-")][0]
        contents+=f'<DownloadsButton pdf="/pdf/{pdf_filename}" />\n\n'
    except: 
        pass

    try:
        chords_filename = [pp for pp in available_chords if pp.endswith(".pdf") and pp.startswith(f"{song_no}-")][0]
        contents+= f'<DownloadChordsButton pdf="/chords/{chords_filename}"/>\n'
    except:
        pass
    

    with open(og_dir + "/../new_docs/" + file, 'w',encoding="utf8") as f:
        f.write(contents)

    