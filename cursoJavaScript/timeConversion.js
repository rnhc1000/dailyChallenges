/**
 * * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 * * Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * * Example
 * * Given  '12:01:00'.
 * ! Return '00:01:00'.
 */

function timeConversion(s) {
    // Write your code here
    let converterPM = {
        '12': '12',
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23',
    }
    let s1 = s.split(':');
    let bit="PM";
    let s2 = s1[2].split('');
    let hora = "";
    console.log("s2 ", s2);
    let s3 = s2.slice(0,2);
    let s4 = [...s3];
    s4 = s4.join('');
    console.log(s4);
    console.log(s3); 
    for (let amPm of s2) {
        if (amPm === 'A') bit = 'AM';
    }
    console.log(bit);
    console.log(s1[0]);
    if (bit === 'PM') {
        let HH = Object.keys(converterPM);
        HH.forEach((hh) => {
            if (hh === s1[0]) {
                hora = converterPM[hh];
                s1[0]=hora;
            }
        });
        let s3 = s 
        console.log(hora);
        s1[2]=s4;
        s1 = s1.join(':');
        console.log(s1)
    } else if (bit === 'AM') {
        s1[0] == '12' ? s1[0] = '00' : s1[0];
        s1[2]= s4;
        s1 = s1.join(":");
        console.log(s1);
    }
}

s = '12:39:59AM';


timeConversion(s)