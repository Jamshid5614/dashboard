document.querySelectorAll('.calendar td').forEach(item => {
    item.classList.add('small');
})


let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let Classes_of_td = [];

let choice_of_months = document.querySelectorAll('tbody').forEach(item => {
    Classes_of_td.push(item.classList[0]);
});



let d = new Date();

let nowMonth = d.getMonth();

let nowYear = d.getFullYear();

let nowDay = d.getDate();

document.getElementById('month&year-value').innerText = `${months[nowMonth]} ${nowYear}`;

let today_of_Month = document.querySelector(`.${Classes_of_td[d.getMonth() - 1]}`);

let className_of_today_of_Month = today_of_Month.classList[0];

let find_thisDay = document.querySelectorAll(`.${className_of_today_of_Month} tr td`);

for (let i = 0; i < find_thisDay.length; i++) {
    if (find_thisDay[i].innerText == d.getDate()) {
        find_thisDay[i].classList.add('today');
        find_thisDay[i].classList.add('active');
    }
}




// worked with days
document.querySelectorAll('.section5 .row .calendar-col .calendar .calendar__body table tbody tr td').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.section5 .row .calendar-col .calendar .calendar__body table tbody tr td').forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })

})

console.log(document.querySelector('.section5 .row .calendar-col .calendar .calendar__body table').children);

for (let i = 1; i < document.querySelector('.section5 .row .calendar-col .calendar .calendar__body table').children.length; i++) {
    let nowmonthsforday = document.querySelector('.section5 .row .calendar-col .calendar .calendar__body table').children[d.getMonth()];
    for (let i = 0; i < nowmonthsforday.children.length; i++) {
        // console.log(nowmonthsforday.children[i].children);
        if (d.getDate() == nowmonthsforday.children[i].children.innerText) {
            nowmonthsforday.children[i].children.classList.add('active');
        }
    }
}

let month__prev = document.querySelector('#month-prev-control');
let month__next = document.querySelector('#month-next-control');



month__next.addEventListener('click', function () {
    if (nowMonth > 10) {
        nowMonth = 0;
        document.getElementById('month&year-value').innerText = `${months[nowMonth]} ${nowYear}`;
    } else {
        nowMonth++;
        document.getElementById('month&year-value').innerText = `${months[nowMonth]} ${nowYear}`;
    }
})

month__prev.addEventListener('click', function () {

    if (nowMonth <= 0) {
        nowMonth = 11;
        document.getElementById('month&year-value').innerText = `${months[nowMonth]} ${nowYear}`;
    } else {
        nowMonth--;
        document.getElementById('month&year-value').innerText = `${months[nowMonth]} ${nowYear}`;
    }
})


// this function worked with month
setInterval(function () {
    if (months[nowMonth] == 'February') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.february').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'September') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.september').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'March') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.march').style.display = 'table-row-group';

    } else if (months[nowMonth] == 'January') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.january').style.display = 'table-row-group';

    } else if (months[nowMonth] == 'March') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.march').style.display = 'table-row-group';


    } else if (months[nowMonth] == 'April') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.april').style.display = 'table-row-group';

    } else if (months[nowMonth] == 'May') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.may').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'June') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.june').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'July') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.july').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'August') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.august').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'October') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.october').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'November') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.november').style.display = 'table-row-group';
    } else if (months[nowMonth] == 'December') {
        document.querySelectorAll('.calendar tbody').forEach(item => {
            item.style.display = 'none';
        })
        document.querySelector('tbody.december').style.display = 'table-row-group';
    }
})


document.getElementById('month&year-value').addEventListener('click', function () {

    document.querySelector('.calendar .calendar__body .myModal').style.display = 'block';
    document.querySelector('.calendar .calendar__body table').style.cssText = "display: none !important;";

    let thisYearForChangeToNext = d.getFullYear();
    document.getElementById('month&year-value').innerText = thisYearForChangeToNext;

    month__next.onclick = function () {
        thisYearForChangeToNext++;
        document.getElementById('month&year-value').innerText = thisYearForChangeToNext;
    }
    month__prev.onclick = function () {
        thisYearForChangeToNext--;
        document.getElementById('month&year-value').innerText = thisYearForChangeToNext;
    }

})



let months__menu = [];

// all of the buttons of months
document.querySelectorAll('.calendar .calendar__body .myModal button').forEach(item => {


    // when the buttons click this funcktion wil work
    item.onclick = function () {
        document.querySelector('.calendar .calendar__body .myModal').style.display = 'none';

        document.querySelector('.calendar .calendar__body table').style.cssText = "display: block !important;";
        let indef_of_months = months.indexOf(item.value);

        document.getElementById('month&year-value').innerText = `${months[indef_of_months]} ${document.getElementById('month&year-value').innerText}`;



        console.log(item.value);
        if (item.value == 'February') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            console.log('february');
            document.querySelector('tbody.february').style.cssText = 'display:block !important;';
        } else if (item.value == 'September') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.september').style.cssText = 'display:block !important;';
        } else if (item.value == 'March') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';

            })
            document.querySelector('tbody.march').style.cssText = 'display:block !important;';

        } else if (item.value == 'January') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';

            })
            document.querySelector('tbody.january').style.cssText = 'display:block !important;';

        } else if (item.value == 'March') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';

            })
            document.querySelector('tbody.march').style.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'April') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.april').style.cssText = 'display:table-row-group !important;';

        } else if (item.value == 'May') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.may').style.display.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'June') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.june').style.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'July') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.july').style.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'August') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.august').style.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'October') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.october').style.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'November') {
            document.querySelectorAll('.calendar tbody').forEach(item => {
                item.style.cssText = 'display: none !important;';
            })
            document.querySelector('tbody.november').style.cssText = 'display:table-row-group !important;';
        } else if (item.value == 'December') {
            console.log('december');
            // document.querySelectorAll('.calendar tbody').forEach(item=>{
            //   return item.style.cssText = 'display: none !important;';
            // })
            document.querySelectorAll('.calendar tbody').forEach(item => {
                return item.style.display = "flex"
            })
            document.querySelector('tbody.december').style.cssText = 'display:table-row-group !important;';
        }

    }

    months__menu.push(item.value);

})



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



// screen theme controllers are at down
let cssFileCdn = document.createElement('link');
cssFileCdn.rel = 'stylesheet';
cssFileCdn.href = 'lightTmemCss/style.css';

let cssFileCdnForColored = document.createElement('link');
cssFileCdnForColored.rel = 'stylesheet'
cssFileCdnForColored.href = 'coloredTheme/coloredTheme.css';

for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
    // document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.remove('selected');
    document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].onclick = function () {
        for (let i = 0; i < document.querySelector('.theme-setting .d-flex.flex-wrap').children.length; i++) {
            document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.remove('selected');
        }
        document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].classList.add('selected');
        switch (document.querySelector('.theme-setting .d-flex.flex-wrap').children[i].children[0].getAttribute('id')) {
            case 'defaultTheme':
                cssFileCdn.remove();
                cssFileCdnForColored.remove();
                break;
            case 'blueWhiteTheme':
                cssFileCdn.remove();
                document.head.appendChild(cssFileCdnForColored);
                document.querySelectorAll('.pages-menu').forEach(item=>{
                    setInterval(function(){
                        let divContent = '';
                        for(let i=0;i<divContent.length;i++){
                            divContent = divContent.children[i].style.cssText = "background-color: blue !important;";
                            divContent =  divContent.children[i];
                            console.log(divContent);
                            
                        }
                        // console.log(divContent.children);
                    },2000)
                })
                break;
            case 'darkTheme':
                cssFileCdn.remove();
                cssFileCdnForColored.remove();
                break;
            case 'lightTheme':
                document.head.appendChild(cssFileCdn);
                document.querySelectorAll('.dropdown-menu').forEach(item => {
                    item.style.cssText = "border-color: darkgrey !important;";
                    document.querySelectorAll('.dropdown-menu li').forEach(item => {
                        item.style.cssText = "border-color: darkgrey !important;";
                    })
                    document.querySelectorAll('.dropdown-menu li a').forEach(item => {
                        item.style.cssText = "border-color: darkgrey !important;";
                    })
                    document.querySelectorAll('.dropdown-menu a').forEach(item => {
                        item.style.cssText = "border-color: darkgrey !important;";
                    })
                })
                break;
        }
    }
}



function clearClasses(btn) {
    btn.classList.remove('active');
}
document.querySelectorAll('.sidebar-behavior').forEach(item => {
    for (let i = 0; i < item.children[2].children.length; i++) {
        item.children[2].children[i].onclick = function () {
            for (let i = 0; i < item.children[2].children.length; i++) {
                clearClasses(item.children[2].children[i]);
            }
            item.children[2].children[i].classList.add('active');

            if (item.children[2].children[i].classList.contains('active')) {
                switch (item.children[2].children[i].innerText) {
                    case 'Compact':
                        if (document.querySelector('.sidebarLeft').classList.contains('active')) {
                            document.querySelectorAll('.pages-menu.to-left .pages-menu-default').forEach(item => {
                                item.style.display = 'none';
                            })
                            document.querySelectorAll('.pages-menu.to-left .pages-menu-compact').forEach(item => {
                                item.style.display = 'block';
                                item.style.overflowX = 'hidden';
                            })
                            document.querySelector('.grandMother').style.cssText = "max-height: 100% !important;"
                            document.querySelectorAll('.pages-menu.to-left').forEach(item => {
                                item.style.cssText = "max-height: 100% !important;";
                            })
                        } else {
                            document.querySelectorAll('.pages-menu.to-right .pages-menu-default').forEach(item => {
                                item.style.display = 'none';
                            })
                            document.querySelectorAll('.page-menu.to-right .pages-menu-compact').forEach(item => {
                                item.style.display = 'block'; item.style.overflowX = 'hidden';
                            })
                            document.querySelector('.grandMother').style.cssText = "max-height: 100% !important;"
                            document.querySelectorAll('.pages-menu.to-right').forEach(item => {
                                item.style.cssText = "max-height: 100% !important;";
                            })
                        }

                        break;
                    case 'Fixed':
                        if (document.querySelector('.sidebarLeft').classList.contains('active')) {
                            document.querySelectorAll('.pages-menu.to-left .pages-menu-default').forEach(item => {
                                item.style.display = 'block';
                            })
                            document.querySelectorAll('.pages-menu.to-left .pages-menu-compact').forEach(item => {
                                item.style.display = 'none';
                            })
                        } else {
                            document.querySelectorAll('.pages-menu.to-right .pages-menu-default').forEach(item => {
                                item.style.display = 'block';
                            })
                            document.querySelectorAll('.pages-menu.to-right .pages-menu-compact').forEach(item => {
                                item.style.display = 'none';
                            })
                        }
                        document.querySelector('.grandMother').style.cssText = "max-height: 100% !important;"
                        document.querySelectorAll('.pages-menu').forEach(item => {
                            item.style.cssText = "max-height: 100% !important;";
                        })
                        break;
                    case 'Sticky':
                        document.querySelector('.grandMother').style.cssText = "max-height: 100vh !important;"
                        document.querySelectorAll('.pages-menu').forEach(item => {
                            item.style.cssText = "max-height: 100vh !important;";
                        })
                        break;
                }
            } else {
                // console.log("ERROR");
            }

        }
    }
})








    document.querySelector('.sidebarLeft').onclick = function(item) {
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
    document.querySelector('.sidebarRight').onclick = function(item){
        item.target.classList.add('active');
        item.target.parentElement.children[0].classList.remove('active');
        document.querySelector('.pages-menu.to-right').style.cssText = "display: block !important;";
        // document.querySelector('.pages-menu.to-right').style.cssText = "margin-right: 0 !important;";
        document.querySelector('.pages-menu.to-left').style.display = 'none';
        document.querySelector('.grandMother__navbar.to-right').style.display = 'flex';
        document.querySelector('.grandMother__navbar.to-left').style.display = 'none';
        document.querySelector('.grandMother').marginLeft = `-${item.offsetWidth}px`;
    }



    // .pages-menu controll
    setInterval(function(){
        if(document.querySelector('.sidebarLeft').classList.contains('active')){
            document.querySelectorAll('.pages-menu.to-left').forEach(item=>{
                item.style.cssText = "display: block !important;"
            })
            document.querySelectorAll('.pages-menu.to-right').forEach(item=>{
                item.style.cssText = "display: none !important;"
            })
        } else{
            document.querySelectorAll('.pages-menu.to-left').forEach(item=>{
                item.style.cssText = "display: none !important;"
            })
            document.querySelectorAll('.pages-menu.to-right').forEach(item=>{
                item.style.cssText = "display: block !important;"
            })
        }
    })




    // navbar controller
    document.querySelectorAll('.navbar-controller').forEach(item=>{
        item.onclick = function(){
            if(document.querySelector('.pages-menu.to-left').style.display == 'block'){
                if(document.querySelector('.pages-menu.to-left').style.marginLeft == '0px'){
                    document.querySelector('.pages-menu.to-left').style.cssText = `margin-left: -${document.querySelector('.pages-menu.to-left').offsetWidth}px !important;`;
                    alert('dedde');
                } else{

                    document.querySelector('.pages-menu.to-left').style.cssText = "margin-left: 0px !important;";
                    alert('de')
                }
            } else{
                if(document.querySelector('.pages-menu.to-right').style.marginRight == '0px'){
                    document.querySelector('.pages-menu.to-right').style.cssText = `margin-right: -${document.querySelector('.pages-menu.to-right').offsetWidth}px !important;`;
                } else{
                    document.querySelector('.pages-menu.to-right').style.cssText = `margin-right: 0px !important;`;
                }
            }
        }
    })

    document.querySelectorAll('.navbar-controller').forEach(item=>{
        item.onclick = function(){
            if(document.querySelector('.pages-menu.to-left').style.display == 'block'){
                if(document.querySelector('.pages-menu.to-left').style.marginLeft == '0px'){
                    alert('true');
                } else{
                    alert("false");
                }
            }
        }
    })

    // console.log(document.querySelector('.pages-menu').style.marginLeft)
























































































































































































































































































































































