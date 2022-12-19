var output = '';
var numofButtons = document.querySelectorAll("button").length;
for(var i = 0; i<numofButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", eventListenerFunction);
}

function eventListenerFunction()
{
    buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "/":
            ClickedOnOperator(buttonInnerHTML)
            break;
        case "X":
            ClickedOnOperator(buttonInnerHTML)
            break;
        case "-":
            ClickedOnOperator(buttonInnerHTML)
            break;
        case "+":
            ClickedOnOperator(buttonInnerHTML)
            break;
        case "AC":
            ClickedOnReset(buttonInnerHTML)
            break;
        case "=":
            DiplayResult(buttonInnerHTML)
            break;
        default: //for 1-9 and 0
            ClickedOnNumber(buttonInnerHTML)
       // buttonAnimation(buttonInnerHTML) 
    }
}

function ClickedOnNumber(buttonInnerHTML) //This function will be called when clicked on 1-9 and 0
{
    output += buttonInnerHTML;
    out1 = document.getElementsByClassName("inputBox");
}

function ClickedOnOperator(buttonInnerHTML) //This function will be called when clicked on '/', 'X', '-', '+'
{
    output += buttonInnerHTML;
}

function ClickedOnReset(buttonInnerHTML) //This function will be called when clicked 'AC'
{
    output = '';
}

function DiplayResult(buttonInnerHTML) //This function will be called when clicked '='
{
    var lengthOfOutput = output.length;
    var num1 = '';
    var num2 = '';
    var tempstr = ''
    var operator = '';
    var result = 0;

    for(let i = 0; i<lengthOfOutput; i++){
        if((output[i] == '/') || (output[i] == 'x') || (output[i] == '-') || (output[i] == '+')){
            if(operator == ''){
                operator = output[i];
                num1 = parseInt(tempstr);
                tempstr = '';
            }
            else{
                num2 = parseInt(tempstr);
                tempstr = '';

                //do calculation
                if(operator == 'x')
                    num1 = num1*num2;
                else if(operator == '+')
                    num1 = num1+num2;
                else if(operator == '-')
                    num1 = num1-num2;
                else if(operator == '/')
                    num1 = num1/num2;

                operator = output[i];
                
            }
        }
        else
            tempstr = tempstr + output[i]
    }
    num2 = parseInt(tempstr);

    
    if(operator == 'x')
        result = num1*num2;
    else if(operator == '+')
        result = num1+num2;
    else if(operator == '-')
        result = num1-num2;
    else if(operator == '/')
        result = num1/num2;

    $("p").text(String(result));
    output = String(result);
    console.log(String(result));
}
$("h1").css("color", "purple");

$("button").click(function() {
    $("p").text(output);
});