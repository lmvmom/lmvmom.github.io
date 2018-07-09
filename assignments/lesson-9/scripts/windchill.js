/* Defining Table
 * Input:  High and low temp of day, wind speed 
 * Processing:  Calculate average temp for day then calculate windchill in a reuseable function (f = 35.74 + 0.6215t - (35.75s^0.16) + (0.4275ts^0.16)) 
				f= wind chill  t = avg temperature  s= wind speed
                round windchill to who number.
 * Output: Windchill 
 */

function doInputOutput() {
    var high = 90, low = 66, airTemp = ((high + low) / 2), windSpeed = 5;
    var windChillCalc = 35.74 + 0.6215 * airTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * airTemp * Math.pow(windSpeed, 0.16);
    return Math.round(windChillCalc);
}
document.getElementById("wchill").innerHTML = doInputOutput();

