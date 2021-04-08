
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
            console.log(document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0])
        }
    } else if (localStorage.getItem('theme') == 'coloredTheme') {
        cssFile.href = "coloredTheme/coloredTheme.css";

    } else if (localStorage.getItem('theme') == 'darkTheme') {
        cssFile.href = "";

    } else {
        cssFile.href = "lightTmemCss/style.css";

    }
}




// let cssFileCdn = document.createElement('link');
// cssFileCdn.rel = 'stylesheet';
// cssFileCdn.href = 'lightTmemCss/style.css';

// let cssFileCdnForColored = document.createElement('link');
// cssFileCdnForColored.rel = 'stylesheet'
// cssFileCdnForColored.href = 'coloredTheme/coloredTheme.css';

// let defaultThemeCssCdn = document.createElement('link');
// defaultThemeCssCdn.rel = 'stylesheet';
// defaultThemeCssCdn.href = 'defaultTheme/defaultTheme.css';

// let newDiv = document.createElement('div');


/*
function lightTheme () {
    document.querySelectorAll('.theme-setting button').forEach(item => {
        item.classList.remove('selected');
    })
    document.getElementById('lightTheme').classList.add('selected');

    defaultThemeCssCdn.remove()
    cssFileCdnForColored.remove();
    document.head.appendChild(cssFileCdn);
    document.querySelectorAll('.dropdown i').forEach(item => {
        item.style.cssText = "color: #333 !important;cursor: pointer;"
    })
    document.querySelectorAll('.dropdown-menu li').forEach(item => {
        item.onmousemove = () => {
            item.style.cssText = "background-color: #F1F1F1F1 !important;";
        }
        item.onmouseleave = () => {
            item.style.cssText = "background-color: #fff !important;";
        }
    })

    document.querySelectorAll('.section2 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #fff !important;"
    })
    document.querySelector('.section2 .lighter').style.cssText = "background-color: #E0EAFC !important;";
    document.querySelector('.section2 .lighter .col').style.cssText = "background-color: #E0EAFC !important;";
    document.querySelector('.section2 .lighter').children[0].children[1].style.cssText = "background-color: #E0EAFC !important;";
    document.querySelectorAll('.section3 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #fff !important;";
    })
    document.querySelectorAll('.section3 .col-sm-12 .jqvmap-region').forEach(item => {
        item.style.cssText = "fill: #E2E8EE !important;";
        item.onmousemove = function (e) {
            e.target.style.cssText = "fill: #F1F1F1 !important;";
        }
        item.onmouseleave = function (e) {
            e.target.style.cssText = "fill: #E2E8EE !important;";
        }
    })
    document.querySelectorAll('.section6').forEach(item => {
        item.style.cssText = "box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%) !important;";
    })
}


function darkTheme () {
    document.querySelectorAll('.theme-setting button').forEach(item => {
        item.classList.remove('selected');
    })
    document.getElementById('darkTheme').classList.add('selected');

    cssFileCdn.remove();
    cssFileCdnForColored.remove();
    defaultThemeCssCdn.remove();
    document.querySelectorAll('.dropdown-menu li').forEach(item => {
        item.onmousemove = () => {
            item.style.cssText = "background-color: #3E4555 !important;";
        }
        item.onmouseleave = () => {
            item.style.cssText = "background-color: #293042 !important;";
        }
    })

    document.querySelectorAll('.section2 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #293042 !important;"
    })
    document.querySelector('.section2 .lighter').style.cssText = "background-color: #343A4B!important;";
    document.querySelector('.section2 .lighter .col').style.cssText = "background-color: #343A4B !important;";
    document.querySelector('.section2 .lighter').children[0].children[1].style.cssText = "background-color: #343A4B !important;";
    document.querySelectorAll('.section3 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #293042 !important;";
    })
    document.querySelectorAll('.section3 .col-sm-12 .jqvmap-region').forEach(item => {
        item.style.cssText = "fill: #545968 !important;";
        item.onmousemove = function (e) {
            e.target.style.cssText = "fill: #484B56 !important;";
        }
        item.onmouseleave = function (e) {
            e.target.style.cssText = "fill: #545968 !important;";
        }
    })
    document.querySelectorAll('.section6').forEach(item => {
        item.style.cssText = "box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%) !important;";
    })
}


function coloredTheme () {
    document.querySelectorAll('.theme-setting button').forEach(item => {
        item.classList.remove('selected');
    })
    document.getElementById('blueWhiteTheme').classList.add('selected');

    cssFileCdn.remove();
    defaultThemeCssCdn.remove()
    document.head.appendChild(cssFileCdnForColored);
    document.querySelectorAll('.dropdown i').forEach(item => {
        item.style.cssText = "color: #333 !important;cursor: pointer;"
    })
    document.querySelectorAll('.dropdown-menu li').forEach(item => {
        item.onmousemove = () => {
            item.style.cssText = "background-color: #F1F1F1F1 !important;";
        }
        item.onmouseleave = () => {
            item.style.cssText = "background-color: #fff !important;";
        }
    })
    document.querySelectorAll('.section2 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #fff !important;"
    })
    document.querySelector('.section2 .lighter').style.cssText = "background-color: #E0EAFC !important;";
    document.querySelector('.section2 .lighter .col').style.cssText = "background-color: #E0EAFC !important;";
    document.querySelector('.section2 .lighter').children[0].children[1].style.cssText = "background-color: #E0EAFC !important;";
    document.querySelectorAll('.section3 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #fff !important;";
    })
    document.querySelectorAll('.section3 .col-sm-12 .jqvmap-region').forEach(item => {
        item.style.cssText = "fill: #E2E8EE !important;";
        item.onmousemove = function (e) {
            e.target.style.cssText = "fill: #F1F1F1 !important;";
        }
        item.onmouseleave = function (e) {
            e.target.style.cssText = "fill: #E2E8EE !important;";
        }
    })
    document.querySelectorAll('.section6').forEach(item => {
        item.style.cssText = "box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%) !important;";
    })
}


function defaultTheme () {
    document.querySelectorAll('.theme-setting button').forEach(item => {
        item.classList.remove('selected');
    })
    document.getElementById('defaultTheme').classList.add('selected');

    cssFileCdn.remove();
    cssFileCdnForColored.remove();
    document.head.appendChild(defaultThemeCssCdn);
    document.querySelectorAll('.dropdown i').forEach(item => {
        item.style.cssText = "color: #333 !important;cursor: pointer;"
    })
    document.querySelectorAll('.dropdown-menu li').forEach(item => {
        item.onmousemove = () => {
            item.style.cssText = "background-color: #F1F1F1F1 !important;";
        }
        item.onmouseleave = () => {
            item.style.cssText = "background-color: #fff !important;";
        }
    })

    document.querySelectorAll('.section2 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #fff !important;"
    })
    document.querySelector('.section2 .lighter').style.cssText = "background-color: #E0EAFC !important;";
    document.querySelector('.section2 .lighter .col').style.cssText = "background-color: #E0EAFC !important;";
    document.querySelector('.section2 .lighter').children[0].children[1].style.cssText = "background-color: #E0EAFC !important;";
    document.querySelectorAll('.section3 .col-sm-12').forEach(item => {
        item.style.cssText = "background-color: #fff !important;";
    })
    document.querySelectorAll('.section3 .col-sm-12 .jqvmap-region').forEach(item => {
        item.style.cssText = "fill: #E2E8EE !important;";
        item.onmousemove = function (e) {
            e.target.style.cssText = "fill: #F1F1F1 !important;";
        }
        item.onmouseleave = function (e) {
            e.target.style.cssText = "fill: #E2E8EE !important;";
        }
    })
    document.querySelectorAll('.section6').forEach(item => {
        item.style.cssText = "box-shadow: 0 0 0.875rem 0 rgb(41 48 66 / 5%) !important;";
    })
}
*/






