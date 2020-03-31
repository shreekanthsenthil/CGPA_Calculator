var i = 0;
obj = document.getElementById('dropdown');
function add_course() {
    i += 1;
    let credit = document.createElement("select");
    credit.setAttribute('id',"c"+i);
    let option1 = document.createElement("option");
    option1.text= '1';
    option1.setAttribute('value', '1');
    credit.add(option1);
    let option2 = document.createElement("option");
    option2.text= '2';
    option2.setAttribute('value', '2');
    credit.add(option2);
    let option3 = document.createElement("option");
    option3.text= '3';
    option3.setAttribute('value', '3');
    credit.add(option3);
    let option4 = document.createElement("option");
    option4.text= '4';
    option4.setAttribute('value', '4');
    credit.add(option4);
    let option5 = document.createElement("option");
    option5.text= '5';
    option5.setAttribute('value', '5');
    credit.add(option5);
    obj.appendChild(credit);
    obj.innerHTML +="  ";
    let grade = document.createElement("select");
    grade.setAttribute('id',"g"+i);
    let options = document.createElement("option");
    options.text= 'S';
    options.setAttribute('value', '10');
    grade.add(options);
    let optiona = document.createElement("option");
    optiona.text= 'A';
    optiona.setAttribute('value', '9');
    grade.add(optiona);
    let optionb = document.createElement("option");
    optionb.text= 'B';
    optionb.setAttribute('value', '8');
    grade.add(optionb);
    let optionc = document.createElement("option");
    optionc.text= 'C';
    optionc.setAttribute('value', '7');
    grade.add(optionc);
    let optiond = document.createElement("option");
    optiond.text= 'D';
    optiond.setAttribute('value', '6');
    grade.add(optiond);
    let optione = document.createElement("option");
    optione.text= 'E';
    optione.setAttribute('value', '5');
    grade.add(optione);
    let optionf = document.createElement("option");
    optionf.text= 'F';
    optionf.setAttribute('value', '0');
    grade.add(optionf);
    obj.appendChild(grade);
    var br = document.createElement("br");
    br.setAttribute("id","b1_"+i);
    var br2 = document.createElement("br");
    br2.setAttribute("id","b2_"+i);
    obj.appendChild(br);
    obj.appendChild(br2);
}

function del_course() {
    let credit = document.getElementById('c'+i);
    obj.removeChild(credit);
    let grade = document.getElementById('g'+i);
    obj.removeChild(grade);
    let br = document.getElementById("b1_"+i);
    let br2 = document.getElementById("b2_"+i);
    obj.removeChild(br);
    obj.removeChild(br2);
    i -=1;
}

function cal_cgpa() {
    var j;
    var total_grade = 0;
    var total_credit=0;
    var credit_ob;
    var credit = 0;
    var grade_ob;
    var grade = 0;
    for (j=1;j<=i;j++){
        credit_ob = document.getElementById('c'+j);
        credit = credit_ob.options[credit_ob.selectedIndex].value;
        credit = parseInt(credit);
        grade_ob = document.getElementById('g'+j);
        grade = grade_ob.options[grade_ob.selectedIndex].value;
        grade = parseInt(grade);
        total_grade += credit * grade;
        total_credit += credit;
    }
    var cgpa = total_grade / total_credit;
    if(total_credit == 0){
        cgpa = 0;
    }
    cgpa = cgpa.toFixed(2);
    document.getElementById('cgpa').innerHTML = "CGPA : " + cgpa;
}

add_course();