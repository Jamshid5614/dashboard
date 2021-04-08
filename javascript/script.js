
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

            if(window.innerWidth <= 1150){
                document.querySelector('.grandMother').style.marginRight = '-260px';
                
                if(!document.querySelector('.pages-menu.to-left').classList.contains('show')){
                    document.querySelector('.grandMother').style.marginRight = '0';
                }

            } 

            

        } else {
            document.querySelector('.pages-menu.to-right').classList.toggle('show');
            
            if(window.innerWidth <= 1150){
                document.querySelector('.grandMother').style.marginLeft = '-260px';

                if(!document.querySelector('.pages-menu.to-right').classList.contains('show')){
                    document.querySelector('.grandMother').style.marginLeft = '0';
                }

            } 

        }
    }
})


setInterval(function(){

    if(window.innerWidth <= 1150){

        if(!document.querySelector('.pages-menu.to-right').classList.contains('show')){
            document.querySelector('.pages-menu.to-right').style.marginRight = '-260px';
        }

    }

})



// calendar
let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month

    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('active')
                day.classList.add('today')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = { value: currDate.getMonth() }
let curr_year = { value: currDate.getFullYear() }

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

setInterval(function () {
    document.querySelectorAll('.calendar-days .calendar-day-hover').forEach(item => {
        item.onclick = function (e) {
            document.querySelectorAll('.calendar-days .calendar-day-hover').forEach(item => {
                item.classList.remove('active')
            })
            e.target.classList.add('active');
        }
    })
})












































































































































































































































































































































