
// table
document.querySelectorAll('.block .section6 table thead tr th').forEach(item => {

  item.onclick = function (item) {
    item.target.classList.add('clicked');
  }

  item.classList.remove('clicked');

})
document.querySelectorAll('.block .section6 .tab-prev').forEach(item => {
  item.onclick = function () {
    document.querySelectorAll('.tabe1').forEach(item => {
      item.style.display = 'block';
    })
    document.querySelectorAll('.tabe2').forEach(item => {
      item.style.display = 'none';
    })
    item.parentElement.children[2].classList.remove('btn-primary');
    item.parentElement.children[2].classList.add('text-dark');
    item.parentElement.children[2].classList.remove('text-white');
    item.parentElement.children[1].classList.add('btn-primary');
    item.parentElement.children[1].classList.add('text-white');
  }
})
document.querySelectorAll('.block .section6 .tab-next').forEach(item => {
  item.onclick = function () {
    document.querySelectorAll('.tabe1').forEach(item => {
      item.style.display = 'none';
    })
    document.querySelectorAll('.tabe2').forEach(item => {
      item.style.display = 'block';
    })
    item.parentElement.children[1].classList.remove('btn-primary');
    item.parentElement.children[1].classList.add('text-dark');
    item.parentElement.children[1].classList.remove('text-white');
    item.parentElement.children[2].classList.add('btn-primary');
    item.parentElement.children[2].classList.add('text-white');
  }
})


document.querySelectorAll('.errorSound').forEach(item => {
  item.onclick = function () {
    let errorAudio = new Audio();
    errorAudio.src = 'http://freesoundeffect.net/sites/default/files/incorrect-answer--1-sound-effect-27493287.mp3';
    errorAudio.play()
  }
})


document.querySelectorAll('.bg-curtain').forEach(item => {
  item.onclick = function () {
    item.style.display = 'none';
    document.querySelectorAll('.navbarSettingSection').forEach(item => {
      item.style.marginRight = '-100%';
    })
  }
})


document.querySelectorAll('.openRightSetting').forEach(item => {
  item.onclick = function () {
    document.querySelectorAll('.navbarSettingSection').forEach(item => {
      item.style.marginRight = '0';
    })
    document.querySelectorAll('.bg-curtain').forEach(item => {
      item.style.display = 'block';
    })
  }
})

document.querySelectorAll('.navbarSettingSection .btn-close').forEach(item => {
  item.onclick = function () {
    document.querySelectorAll('.navbarSettingSection').forEach(item => {
      item.style.marginRight = '-100%';
    })
    document.querySelectorAll('.bg-curtain').forEach(item => {
      item.style.display = 'none';
    })
  }
})


// this codes worked with last table
document.querySelectorAll('.section6 table thead tr th').forEach(item => {


  item.onclick = function () {
    document.querySelectorAll('.section6 table thead tr th').forEach(item => {
      item.classList.remove('shunda');
    })
    document.querySelectorAll('.section6 table thead tr th').forEach(item => {
      item.classList.add('bularmas');
    })
    item.classList.add('shunda');
    document.querySelector('.shunda').classList.remove('bularmas');


    if (document.querySelector('.shunda').children[0].children[0].children[0].classList.contains('active')) {
      document.querySelector('.shunda').children[0].children[0].children[0].classList.remove('active');
      document.querySelector('.shunda').children[0].children[0].children[1].classList.add('active');
    } else {
      document.querySelector('.shunda').children[0].children[0].children[0].classList.add('active');
      document.querySelector('.shunda').children[0].children[0].children[1].classList.remove('active');
    }

    document.querySelectorAll('.bularmas').forEach(item => {
      item.children[0].children[0].children[0].classList.remove('active');
      item.children[0].children[0].children[1].classList.remove('active');
    })
  }
})

// badge of li at .pages-menu
document.querySelectorAll('.navbar_noti').forEach(item => {
  item.style.display = 'none';
})
// sign of .pages-menu of accordions
document.querySelectorAll('.accordion-button').forEach(item => {
  item.classList.remove('accordion-button');
})


setInterval(function () {
  if (window.innerWidth <= 1200) {
    document.querySelector('.profile-dropdown').classList.remove('dropdown');
    document.querySelector('.profile-dropdown').classList.add('dropstart');
  }
})


// // screen theme controllers are at down
// let cssFileCdn = document.createElement('link');
// cssFileCdn.rel = 'stylesheet';
// cssFileCdn.href = 'ThemeForAnalytics/lightTheme.css';

// let cssFileCdnForColored = document.createElement('link');
// cssFileCdnForColored.rel = 'stylesheet'
// cssFileCdnForColored.href = 'ThemeForAnalytics/coloredTheme.css';

// let defaultThemeCssCdn = document.createElement('link');
// defaultThemeCssCdn.rel = 'stylesheet';
// defaultThemeCssCdn.href = 'defaultTheme/defaultTheme.css';

// for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
//   // document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.remove('selected');
//   document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].onclick = function () {
//     for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
//       document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.remove('selected');
//     }
//     document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.add('selected');

//     switch (document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].getAttribute('id')) {
//       case 'defaultTheme':
//         cssFileCdn.remove();
//         cssFileCdnForColored.remove();
//         document.head.appendChild(defaultThemeCssCdn);
//         document.querySelectorAll('.dropdown-menu li').forEach(item=>{
//           item.onmousemove = () => {
//             item.style.cssText = "background-color: #F1F1F1F1 !important;";
//           }
//           item.onmouseleave = () => {
//             item.style.cssText = "background-color: #fff !important;";
//           }
//         })
//         break;
//       case 'blueWhiteTheme':
//         cssFileCdn.remove();
//         document.head.appendChild(cssFileCdnForColored);
//         defaultThemeCssCdn.remove();

//           document.querySelectorAll('.pages-menu').forEach(item => {
//             item.style.backgroundColor = 'blue';
//             console.log(item.children[0].children);
//           })
//           document.querySelectorAll('.dropdown-menu li').forEach(item=>{
//             item.onmousemove = () => {
//               item.style.cssText = "background-color: #F1F1F1F1 !important;";
//             }
//             item.onmouseleave = () => {
//               item.style.cssText = "background-color: #fff !important;";
//             }
//           })

//         break;
//       case 'darkTheme':
//         cssFileCdn.remove();
//         cssFileCdnForColored.remove();
//         defaultThemeCssCdn.remove();
//         document.querySelectorAll('.dropdown-menu li').forEach(item=>{
//           item.onmousemove = () => {
//             item.style.cssText = "background-color: #3E4555 !important;";
//           }
//           item.onmouseleave = () => {
//             item.style.cssText = "background-color: #293042 !important;";
//           }
//         })
//         break;
//       case 'lightTheme':
//         document.head.appendChild(cssFileCdn);
//         defaultThemeCssCdn.remove();
//         document.querySelectorAll('.dropdown-menu').forEach(item => {
//           item.style.cssText = "border-color: darkgrey !important;";
//           document.querySelectorAll('.dropdown-menu li').forEach(item => {
//             item.style.cssText = "border-color: darkgrey !important;";
//           })
//           document.querySelectorAll('.dropdown-menu li a').forEach(item => {
//             item.style.cssText = "border-color: darkgrey !important;";
//           })
//           document.querySelectorAll('.dropdown-menu a').forEach(item => {
//             item.style.cssText = "border-color: darkgrey !important;";
//           })
//         })
//         document.querySelectorAll('.dropdown-menu li').forEach(item=>{
//           item.onmousemove = () => {
//             item.style.cssText = "background-color: #F1F1F1F1 !important;";
//           }
//           item.onmouseleave = () => {
//             item.style.cssText = "background-color: #fff !important;";
//           }
//         })
//         cssFileCdnForColored.remove();
//         document.querySelector('footer').classList.remove('border-secondary');
//         break;
//     }
//   }
// }



document.querySelector('.sidebarLeft').onclick = function (item) {
  item.target.classList.add('active');
  item.target.parentElement.children[1].classList.remove('active');
  document.querySelector('.pages-menu.to-left').style.display = 'block';
  document.querySelector('.pages-menu.to-left').style.cssText = "margin-left: 0;";
  document.querySelector('.pages-menu.to-right').style.display = 'none';
  document.querySelector('.grandMother__navbar.to-right').style.display = 'none';
  document.querySelector('.grandMother__navbar.to-left').style.display = 'flex';
  // setInterval(func)
  // document.querySelector('.grandMother').style.cssText = "margin-right: -250px !important;";
}

document.querySelector('.sidebarRight').onclick = function (item) {
  item.target.classList.add('active');
  item.target.parentElement.children[0].classList.remove('active');
  document.querySelector('.pages-menu.to-right').style.cssText = "display: block;";
  // document.querySelector('.pages-menu.to-right').style.cssText = "margin-right: 0 !important;";
  document.querySelector('.pages-menu.to-left').style.display = 'none';
  document.querySelector('.grandMother__navbar.to-right').style.display = 'flex';
  document.querySelector('.grandMother__navbar.to-left').style.display = 'none';
  document.querySelector('.grandMother').marginLeft = `-${item.offsetWidth}px`;
}


function clearClasses(btn) {
  btn.classList.remove('active');
}


// .pages-menu controll
setInterval(function () {
  if (document.querySelector('.sidebarLeft').classList.contains('active')) {
    document.querySelectorAll('.pages-menu.to-left').forEach(item => {
      item.style.cssText = "display: block !important;"
    })
    document.querySelectorAll('.pages-menu.to-right').forEach(item => {
      item.style.cssText = "display: none !important;"
    })
  } else {
    document.querySelectorAll('.pages-menu.to-left').forEach(item => {
      item.style.cssText = "display: none !important;"
    })
    document.querySelectorAll('.pages-menu.to-right').forEach(item => {
      item.style.cssText = "display: block !important;"
    })
  }
})



document.querySelectorAll('.navbar-controller').forEach(item => {
  item.onclick = function () {
    if (document.querySelector('.pages-menu.to-left').style.display == 'block') {
      document.querySelector('.pages-menu.to-left').classList.toggle('show');

      if (window.innerWidth <= 1150) {
        document.querySelector('.grandMother').style.marginRight = '-260px';

        if (!document.querySelector('.pages-menu.to-left').classList.contains('show')) {
          document.querySelector('.grandMother').style.marginRight = '0';
        }

      }



    } else {
      document.querySelector('.pages-menu.to-right').classList.toggle('show');

      if (window.innerWidth <= 1150) {
        document.querySelector('.grandMother').style.marginLeft = '-260px';

        if (!document.querySelector('.pages-menu.to-right').classList.contains('show')) {
          document.querySelector('.grandMother').style.marginLeft = '0';
        }

      }

    }
  }
})


setInterval(function () {

  if (window.innerWidth <= 1150) {

    if (!document.querySelector('.pages-menu.to-right').classList.contains('show')) {
      document.querySelector('.pages-menu.to-right').style.marginRight = '-260px';
    }

  }

})




// console.group() 
/*
  console.group('title of console.group()')
  console.error('error function')
  console.table({name: "jamshid"})
*/




document.querySelectorAll('.dropdown-menu li').forEach(item=>{
  item.onmousemove = function () {
    item.style.cssText = "background-color: #F1F1F1 !important;";
  }
  item.onmouseleave = function () {
    item.style.cssText = "background-color: #fff !important;";
  }
})








  





// setInterval(function(){
//   for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
//      if(document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.contains('selected')){
//        switch (document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].getAttribute('id')) {
//          case 'defaultTheme':

//            break;
//          case 'blueWhiteTheme':   
//              document.querySelectorAll('.pages-menu').forEach(item => {
//                item.style.backgroundColor = 'blue';
//                console.log(item.children[0].children);
//              })
   
//            break;
//          case 'darkTheme':

//            break;
//          case 'lightTheme':

//            break;
//        }
//      } 
//   }
// })


















































































































































































































































































































