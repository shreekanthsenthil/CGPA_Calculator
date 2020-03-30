var i = 0;
obj = document.getElementById('dropdown');
function add_course() {
    i += 1;
    var credit = document.createElement("select");
    credit.setAttribute('id',"c"+i);
    console.log("c"+i);
    var option = document.createElement("option");
    option.text= 'S';
    credit.add(option);
    obj.appendChild(credit);
    var br = document.createElement("br");
    br.setAttribute("id","b1_"+i);
    var br2 = document.createElement("br");
    br2.setAttribute("id","b2_"+i);
    obj.appendChild(br);
    obj.appendChild(br2);
}

function del_course() {
    var name = "c"+i;
    console.log(name);
    let toremove = document.getElementById(name);
    obj.removeChild(toremove);
    let br = document.getElementById("b1_"+i);
    let br2 = document.getElementById("b2_"+i);
    obj.removeChild(br);
    obj.removeChild(br2);
    i -=1;
}


