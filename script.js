
let title = document.querySelector("#title");
let url = document.querySelector("#url");
let tag = document.querySelector("#tag");
let result = document.querySelector(".result_text");
let submit_btn = document.querySelector("#submit");
let copy_btn = document.querySelector(".copy_btn");


function generate(title, url, tag){
    let final_string = `<title>${title}</title> <meta name="theme-color" content="${url}"> <meta name="description" content="${tag}">`;
    result.value = final_string;
}

function copy(){
    result.select();
    document.execCommand("copy");
}

submit_btn.addEventListener("click", () => {
    generate(title.value, url.value, tag.value);
    title.value = "";
    url.value = "";
    tag.value = "";
});

copy_btn.addEventListener("click", () => {
    copy();
})

window.addEventListener("unload", () => {
    result.value = "";
})

