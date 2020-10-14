var form = document.querySelector('#form');
var box_dashed = document.querySelector('.dashed')

box_dashed.style.display= 'none'

form.addEventListener('submit', function(){

    console.log('cargado')

    var name = document.querySelector('#name').value;
    var sex = document.querySelector('#sex').value;
    var weight = document.querySelector('#weight').value;
    var age = document.querySelector('#age').value;
    box_dashed.style.display= 'block'

    var p_name = document.querySelector('#p_name span')
    var p_sex = document.querySelector('#p_sex span')
    var p_weight = document.querySelector('#p_weight span')
    var p_age = document.querySelector('#p_age span')

    p_name.innerHTML= name
    p_sex.innerHTML= sex
    p_weight.innerHTML= weight
    p_age.innerHTML= age


    // var data = [name,surName,age]
    // console.log(data)
})