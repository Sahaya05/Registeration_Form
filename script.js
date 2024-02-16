let fdob=false,fnme=false,fmail=false,fno=false,fgen=false,fedu=false,fusnme=false,fpss=false,fpan=false,fimg=false
const getName = (nme) => {   
    let regex = /^[a-zA-Z ]+$/;
    let input=document.getElementById("nme")
    let txt=document.getElementById("name")
    if(nme.length>0){
        if (regex.test(nme)) {
            fnme=true
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            txt.classList.remove('text-danger')
        } else {
            fnme=false
            txt.classList.add('text-danger')
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
    }
    else{
        fnme=false
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
}
const getEmail=(email)=>{
    let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let input=document.getElementById("email")
    let txt=document.getElementById("mail")
    if(regex.test(email)){
        fmail=true
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        txt.classList.remove('text-danger')
    }   
    else{
        fmail=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
}
const getNumber=(no)=>{
    let regex=/^[6-9]\d[^\s]*$/
    let input=document.getElementById("no")
    let txt=document.getElementById("No")
    if(regex.test(no)){
        if(no.length==10){
            fno=true
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            txt.classList.remove('text-danger')
            
        }
        else{
            fno=false
            txt.classList.add('text-danger')
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
        }
    }
    else{
        fno=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
}
const getDate = () => {
    let date = document.getElementById("date").value;
    var yr = new Date(date).getFullYear();
    let input=document.getElementById("date")
    let txt=document.getElementById("datecheck")
    if (yr < 1950 || yr > 2010) {
        fdob=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
    else{
        fdob=true
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        txt.classList.remove('text-danger')
    }    
}
const getGender = (gen) => {
    let input=document.getElementById("gender")
    let txt=document.getElementById("Gender")
    if (gen === "none") {
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        fgen=false
    } else {
        fgen=true
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        txt.classList.remove('text-danger')
    }
}

const getEducation=(edu)=>{
    let input=document.getElementById("educat")
    let txt=document.getElementById("Edu")
    if(edu==='none'){
        fedu=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
    else{
        fedu=true
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        txt.classList.remove('text-danger')
    }
}
const getUname=(name)=>{
    let regex=/^[a-zA-Z][a-zA-Z0-9_!@#$%^&*()]*$/
    let input=document.getElementById("uname")
    let txt=document.getElementById("Uname")
    if(regex.test(name)){
        let existingData = JSON.parse(localStorage.getItem("formData"))
    if(existingData){
       for(let i=0;i<existingData.length;i++){
        console.log(name)
        if((existingData[i].uname).toUpperCase()===name.toUpperCase()){
            txt.classList.add('text-danger')
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            fusnme=false
        }
        else{
            fusnme=true
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            txt.classList.remove('text-danger')
        }
       }
    }
    else{
        fusnme=true
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        txt.classList.remove('text-danger')
    }
    if(name.length==0){
        fusnme=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
    }
    else{
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        fusnme=false
       }
}
const getPass=(pss)=>{
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    let input=document.getElementById("pss")
    let txt=document.getElementById("pass")
    if(regex.test(pss)){
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            txt.classList.remove('text-danger')
            fpss=true
    }
    else{
        fpss=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        
    }
}
const getPan=(pan)=>{
    if(pan.length==10){
        const regex = /^[A-Z]{5}\d{4}[A-Z]$/;
        let input=document.getElementById("Pan")
        let txt=document.getElementById("pan")
        if(regex.test(pan)){
            input.classList.add('is-valid');
            input.classList.remove('is-invalid');
            txt.classList.remove('text-danger')
            fpan=true
        }
    }
    else{
        fpan=false
        txt.classList.add('text-danger')
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    }
}
const getImage=(event)=>{
    const file = event.target.files[0];
    const fileSizeInBytes = file.size;
    const fileSizeInMB = fileSizeInBytes / (1024 * 1024); 
    const sizeDisplay = document.getElementById("sizeDisplay");
    if (fileSizeInMB > 2) {
        sizeDisplay.textContent = `File size: ${fileSizeInMB.toFixed(2)} MB`;
        sizeDisplay.style.color='red'
        fimg=false
        document.getElementById("l9").innerHTML = '❌';
        document.getElementById("imgBox").style.border = '2px dashed red';
    } else {
        sizeDisplay.style.color='white'
        fimg=true
        document.getElementById("l9").innerHTML = '✅';
        document.getElementById("imgBox").style.border = '2px dashed green';
    }
}
const Eye = () => {
    const icon = document.getElementById("eye").src;
    if (icon.endsWith('hide.png')) {
        document.getElementById("eye").src = 'eye.png';
        document.getElementById("pss").type = 'text';
    } else {
        document.getElementById("pss").type = 'password';
        document.getElementById("eye").src = 'hide.png';
    }
}


document.getElementById("myForm").addEventListener("submit", function(event) {
    console.log(fnme ,fmail ,fno ,fdob, fgen , fedu , fusnme , fpss , fpan , fimg)
    event.preventDefault();
    if(fnme &&fmail && fno && fdob && fgen && fedu && fusnme && fpss && fpan && fimg){
    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];
    console.log(document.getElementById("occupation"))
    const reader = new FileReader();
    if(document.getElementById("occupation").value==""){
        occ="Not mentioned"
    }
    else{
        occ=document.getElementById("occupation").value
    }
    reader.onload = function(event) {
        const formData = {
            name:document.getElementById("nme").value,
            email: document.getElementById("email").value,
            no: document.getElementById("no").value,
            date: document.getElementById("date").value,
            gender: document.getElementById("gender").value,
            education: document.getElementById("educat").value,
            uname: document.getElementById("uname").value,
            pass: document.getElementById("pss").value,
            occupation:occ,
            pan: document.getElementById("Pan").value,
            img: event.target.result,
            imgSize:file.size
        };
        let existingData = localStorage.getItem("formData");
        if (existingData) {
            existingData = JSON.parse(existingData);
            existingData.push(formData);
        } else {
            existingData = [formData];
        }
        localStorage.setItem("formData", JSON.stringify(existingData));
        alert('Registered successfully')
        window.location.href = "demo.html";
    };
    reader.readAsDataURL(file);
    }
    else{
        alert("Fill the form properly")
    }
});
