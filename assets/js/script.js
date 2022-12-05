let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');

// email JS
// function SendMail() {
//    var param = {
//        name : document.getElementById("full_name").value,
//        email : document.getElementById("email").value,
//        company : document.getElementById("company").value,  
//    }
//    emailjs.send("service_4293ds2","template_9q5uv4r_01", params).then(function (res) {
//        alert("Email is Sent Successfully!" + res.status);
//    })    
// }

// emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });


// Request to add or remove slot textfield
// var counter = 1;
// var textbox = "";
// var hob = document.getElementById("hob")
// function addBox() {
//     var div = document.createElement("div");
//     div.setAttribute("class", "q-box__question");
//     div.setAtrribute("id", "box_"+counter);
    
//     var textBox = "<label>Slots</label><input type="text" name="slots" class="form-control" id='other_slots_"+counter+"'><input class="mybox" type='button' value='-' onclick='removeBox(this)'>";
    
//     div.innerHTML = textBox;
//     hob.appendChild(div);
//     counter++;

// }

// function removeBox(ele) {
//     ele.parentNode.remove();
    
// }



form.onsubmit = () => {
    var param = {
       name : document.getElementById("full_name").value,
       email : document.getElementById("email").value,
       company : document.getElementById("company").value,  
       phone : document.getElementById("phone").value,  
   }
   emailjs.send("service_4293ds2","template_9q5uv4r_01", param).then(function (res) {
//        alert("Email is Sent Successfully!" + res.status);
   })    
    return false
}



let current_step = 0;
let stepCount = 5
step[current_step].classList.add('d-block');
if (current_step == 0) {
    prevBtn.classList.add('d-none');
    submitBtn.classList.add('d-none');
    nextBtn.classList.add('d-inline-block');
}

const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

nextBtn.addEventListener('click', () => {
    current_step++;
    let previous_step = current_step - 1;
    if ((current_step > 0) && (current_step <= stepCount)) {
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block');
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step == stepCount) {
            submitBtn.classList.remove('d-none');
            submitBtn.classList.add('d-inline-block');
            nextBtn.classList.remove('d-inline-block');
            nextBtn.classList.add('d-none');
        }
    } else {
        if (current_step > stepCount) {
            form.onsubmit = () => {
                return true
            }
        }
    }
    progress((100 / stepCount) * current_step);
});
 
 
prevBtn.addEventListener('click', () => {
    if (current_step > 0) {
        current_step--;
        let previous_step = current_step + 1;
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if (current_step < stepCount) {
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
            nextBtn.classList.add('d-inline-block');
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
        }
    }
 
    if (current_step == 0) {
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
    }
    progress((100 / stepCount) * current_step);
});
 
 
submitBtn.addEventListener('click', () => {
    preloader.classList.add('d-block');
 
    const timer = ms => new Promise(res => setTimeout(res, ms));
 
    timer(3000)
        .then(() => {
            bodyElement.classList.add('loaded');
        }).then(() => {
            step[stepCount].classList.remove('d-block');
            step[stepCount].classList.add('d-none');
            prevBtn.classList.remove('d-inline-block');
            prevBtn.classList.add('d-none');
            submitBtn.classList.remove('d-inline-block');
            submitBtn.classList.add('d-none');
            succcessDiv.classList.remove('d-none');
            succcessDiv.classList.add('d-block');
        })
 
});






