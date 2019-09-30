/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = { family: 4 }
) {


    let week = 0;


    switch (focus) {
        case 'family':
            if (knowsProgramming == true) {
                week = 800 / config.family;
            } else {
                week = 1300 / config.family;
            }
            break;
        case 'friends':
            if (knowsProgramming == true) {
                week = 800 / config.friends;
            } else {
                week = 1300 / config.friends;
            }

            break;
        case 'normal_life':
            if (knowsProgramming == true) {
                week = 800 / config.normal_life;
            } else {
                week = 1300 / config.normal_life;
            }

            break;
        case 'profession':
            if (knowsProgramming == true) {
                week = 800 / config.profession;
            } else {
                week = 1300 / config.profession;
            }

            break;
        case 'carrier':
            if (knowsProgramming == true) {
                week = 800 / config.carrier;
            } else {
                week = 1300 / config.carrier;
            }

            break;
        case 'top_peformance':
            if (knowsProgramming == true) {
                week = 800 / config.top_peformance;
            } else {
                week = 1300 / config.top_peformance;
            }

            break;



    }
    return Math.ceil(week);
};