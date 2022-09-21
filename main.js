const $ = selector => document.querySelector(selector)

const textArea = $("#code")
const submit = $("#submit")
const script = $("#script")


submit.addEventListener('click', (e) => {
    script.innerHTML = textArea.value;
    const scripts = script.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerText)
})
