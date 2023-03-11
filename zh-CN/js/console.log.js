const owner = "Bkebi-Group";
const repo = "Bkebi-GC-Release";
fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
  .then(response => response.json()) 
  .then(data => {
    const tag_name = data.tag_name;
    console.log(`%c Bkebi GC %c ${tag_name} %c https://github.com/Bkebi-Group/Bkebi-GC-Release/releases/latest`, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "")
     });

let url = "https://img.shields.io/github/downloads/Bkebi-Group/Bkebi-GC-Release/total.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const downloads_value = data.value;
    console.log(`%c Total Downloads %c ${downloads_value} %c `, "color: #fff; background: #5f5f5f", "color: #fff; background: #4bc729", "")
  })