var boxEle = document.body.querySelector(".box");

// var list = ["cat","dog","bird","Milly"];
//
// function renderList (){
//     boxEle.innerHTML="";
//     for(var i=0; i<list.length; i++){
//         makeElement(i);
//         // var ele = document.createElement("div");
//         // ele.innerHTML=list[i];
//         // boxEle.appendChild(ele);
//     }
// }
// function makeElement(idx){
//     var ele = document.createElement("div");
//     ele.innerHTML=list[idx];
//     boxEle.appendChild(ele);
// }
//
// renderList();
// makeElement();
//
//
// document.body.querySelector(".butt").addEventListener("click", function(){
//     var question = prompt("What item do you want to add?");
//     list.push(question);
//     renderList();
// })


var damage = 0;
var fire_Damage = 3;
var ice_Damage = 1;
var poison_Damage = 4;
function MillFunction(elem) {
    var x = elem.id;
    switch (x) {
        case '1':
            damage=damage+fire_Damage-1;
            break;
        case '2':
            damage=damage+ice_Damage+1;
            break;
        case '3':
            damage=damage+poison_Damage;
            break;
    }
    document. getElementById("status"). innerHTML = "Dragon Damage : "+damage;
    if(damage>=10){
        document. getElementById("win"). innerHTML = "You Win !";
    }
}