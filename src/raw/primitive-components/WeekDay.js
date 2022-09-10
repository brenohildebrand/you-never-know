import { Component } from "../primitive";


const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Friday',
    'Saturday',
];

const fiveMinutes = 1000 * 60 * 5;

function getDay () {
    return weekDays[new Date().getDay()];
}

const WeekDay = new Component({
    name: 'WeekDay',
    tagName: 'p',
    styles: {
        userSelect: 'none',

        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: '1rem',
        
        // textShadow: '0 -1px 1px #fafafa',
    }
})

WeekDay.element.innerText = getDay();

export default WeekDay;