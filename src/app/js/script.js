const form =document.querySelector('form');
const email =document.querySelector('#email');
const submit=document.querySelector('#submit');
const img_1 =document.querySelector("#img_1");
const img_2 =document.querySelector("#img_2");
const para =document.querySelector("#para");
const hiddel = document.querySelector("#hiden");
const main =document.querySelector("main");



window.addEventListener('load',()=>{
    email.value=''
})

// function alert_fun (){
//     div = document.createElement('div');
//     div.append(" Valid email requried");
//     div.className = "alert text-[10px] text-right mb-2 text-Tomato font-semibold",
//     email.classList.add("bg-red-100");
//     email.classList.add("border-Tomato");
//     email.before(div);
// }

form.addEventListener('submit',e =>{
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var emailValue = email.value;
    if(!emailRegex.test(email.value)){
        e.preventDefault();
        // alert_fun();
        const alertfn={
            fi:div = document.createElement('div'),
            sec:div.append(" Valid email requried"),
            thr:div.className = "alert text-[10px] text-right mb-2 text-Tomato font-semibold",
            for:email.classList.add("bg-red-100"),
            fif:email.classList.add("border-Tomato"),
            sis:email.before(div),
        }
        submit.disabled=true;
        submit.classList.replace('cursor-pointer','cursor-not-allowed')
        console.log("Email is invlid");
        
    }else{

        const remo={
            ss:img_1.classList.add("hidden"),
            pp:para.classList.add("hidden"),
            aa:hiddel.classList.remove("hidden"),
            ff:img_2.classList.add("hidden"),
        }
        main.classList.replace("sm:bg-white","sm:bg-Dark_Slate_Grey");
        var text = document.querySelector("#text");
        text.innerHTML = `A confirmation email has been sent to <strong>${emailValue}.</strong> Please open it and click the button inside to confirm your subscription.`;
    }
})

email.addEventListener('focus',()=>{
    const safe={
        change:email.classList.remove("bg-red-100"),
        changebor:email.classList.remove("border-Tomato"),
    }
    document.querySelector(".alert").remove();
    submit.disabled=false;
    submit.classList.replace('cursor-not-allowed','cursor-pointer')
})







