// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return(`This Saturday, I want to ${activity}!`);
      }
    saturdayFun();
    saturdayFun('roller-skate');

function mondayWork(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`);
        }
    mondayWork('work from home.');


    function wrapAdjective(wrapper = "*") {
        function emphatic(string = "a hard worker") {
        return `You are ${wrapper}${string}${wrapper}!`;
            };
        return emphatic;
          };
        let result = wrapAdjective("||");
        result("a dedicated programmer");