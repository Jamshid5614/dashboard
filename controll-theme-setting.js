
let cssFile = document.querySelector('.themes-css-file-cdn');




// screen theme controllers are at down
let cssFileCdn = document.createElement('link');
cssFileCdn.rel = 'stylesheet';
cssFileCdn.href = 'lightTmemCss/style.css';

let cssFileCdnForColored = document.createElement('link');
cssFileCdnForColored.rel = 'stylesheet'
cssFileCdnForColored.href = 'coloredTheme/coloredTheme.css';

let defaultThemeCssCdn = document.createElement('link');
defaultThemeCssCdn.rel = 'stylesheet';
defaultThemeCssCdn.href = 'defaultTheme/defaultTheme.css';



for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
    // document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.remove('selected');
    document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].onclick = function () {

        for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
            document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.remove('selected');
        }

        document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.add('selected');

        if (document.querySelector('.theme-setting .d-flex.flex-wrap').children[0].children[0].classList.contains('selected')) {
            // default
            localStorage.setItem('theme', 'defaultTheme');
        } else if (document.querySelector('.theme-setting .d-flex.flex-wrap').children[1].children[0].classList.contains('selected')) {
            // colored
            localStorage.setItem('theme', 'coloredTheme');
    
        } else if (document.querySelector('.theme-setting .d-flex.flex-wrap').children[2].children[0].classList.contains('selected')) {
            // dark
            localStorage.setItem('theme', 'darkTheme');
    
        } else {
            // light
            localStorage.setItem('theme', 'lightTheme');
        }

        if(localStorage.getItem('theme') == 'defaultTheme'){
            cssFile.href = 'defaultTheme/defaultTheme.css';
        } else if (localStorage.getItem('theme') == 'coloredTheme') {
            cssFile.href = "coloredTheme/coloredTheme.css";
        } else if (localStorage.getItem('theme') == 'darkTheme') {
            cssFile.href = "";
        } else {
            cssFile.href = "lightTmemCss/style.css";
        }
        
    }
}


window.onload = function () {
    if(localStorage.getItem('theme') == 'defaultTheme'){
        cssFile.href = 'defaultTheme/defaultTheme.css';
        document.querySelectorAll('.theme-setting .d-flex.flex-wrap button').forEach(item=>{
            item.classList.remove('selected');
        })
        for(let i=0;i<document.querySelector('.theme-setting .d-flex.flex-wrap').children.length;i++){
            document.querySelector('.theme-setting .d-flex.flex-wrap').children[0].children[0].classList.add('selected')
        }        
        document.querySelectorAll('footer').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;"
        })
        document.querySelectorAll('.section6 table tbody tr').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;";
        })
        document.querySelectorAll('.section6 table thead tr').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;";
        })
    } else if (localStorage.getItem('theme') == 'coloredTheme') {
        cssFile.href = "coloredTheme/coloredTheme.css";
        document.querySelectorAll('.theme-setting .d-flex.flex-wrap button').forEach(item=>{
            item.classList.remove('selected');
        })
        for(let i=0;i<document.querySelector('.theme-setting .d-flex.flex-wrap').children.length;i++){
            document.querySelector('.theme-setting .d-flex.flex-wrap').children[1].children[0].classList.add('selected')
        }
        document.querySelectorAll('footer').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;"
        })
        document.querySelectorAll('.section6 table tbody tr').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;";
        })
        document.querySelectorAll('.section6 table thead tr').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;";
        })
    } else if (localStorage.getItem('theme') == 'darkTheme') {
        cssFile.href = "";
        document.querySelectorAll('.theme-setting .d-flex.flex-wrap button').forEach(item=>{
            item.classList.remove('selected');
        })
        for(let i=0;i<document.querySelector('.theme-setting .d-flex.flex-wrap').children.length;i++){
            document.querySelector('.theme-setting .d-flex.flex-wrap').children[2].children[0].classList.add('selected')
        }
    } else {
        cssFile.href = "lightTmemCss/style.css";
        document.querySelectorAll('.theme-setting .d-flex.flex-wrap button').forEach(item=>{
            item.classList.remove('selected');
        })
        //
        document.querySelectorAll('footer').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;"
        })
        document.querySelectorAll('.section6 table tbody tr').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;";
        })
        document.querySelectorAll('.section6 table thead tr').forEach(item=>{
            item.style.cssText = "border-color: darkgrey !important;";
        })
        //
        for(let i=0;i<document.querySelector('.theme-setting .d-flex.flex-wrap').children.length;i++){
            document.querySelector('.theme-setting .d-flex.flex-wrap').children[3].children[0].classList.add('selected')
        }
    }
}










