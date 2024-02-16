const displayContext=(data)=>{
    var divison = document.getElementById("hill");
    var div = document.createElement("div");
    div.classList.add("card", "w-100", "max-width-320px");
    
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    var row = document.createElement("div");
    row.classList.add("row", "gx-3");
    
    var imgColumn = document.createElement("div");
    imgColumn.classList.add("col-auto");
    
    var img = document.createElement("img");
    img.src = data.img;
    img.classList.add("rounded-start");
    img.alt = "User Image";
    img.style.width = "150px"; // Adjust the width as needed
    img.style.height = "auto"; // Maintain aspect ratio
    imgColumn.appendChild(img);
    
    var textColumn = document.createElement("div");
    textColumn.classList.add("col");
    
    var para = document.createElement("p");
    para.classList.add("card-text");
    para.innerHTML = `
        <strong>Name:</strong> ${data.name}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Phone No:</strong> ${data.no}<br>
        <strong>D.O.B:</strong> ${data.date}<br>
        <strong>Pan no:</strong> ${data.pan}<br>
        <strong>Username:</strong> ${data.uname}<br>
        <strong>Gender:</strong> ${data.gender}<br>
        <strong>Education:</strong> ${data.education}<br>
        <strong>Occupation:</strong> ${data.occupation}
    `;
    
    textColumn.appendChild(para);
    
    row.appendChild(imgColumn);
    row.appendChild(textColumn);
    cardBody.appendChild(row);
    div.appendChild(cardBody);
    divison.appendChild(div);
    
}
const search=()=>{
    document.getElementById("hill").innerHTML=''
    let charAndSpaceRegex = /^[a-zA-Z\s]*$/;
    const text=document.getElementById("val").value
    if(charAndSpaceRegex.test(text))
    {
        if (text) {
            const existingData = JSON.parse(localStorage.getItem("formData"));
            for (let i = 0; i < existingData.length; i++) {
                let ori = (existingData[i].name).toUpperCase();
                if (ori.includes(text.toUpperCase())) {
                    displayContext(existingData[i])
                }
            }
        }
    }
    else{
        let numbersOnlyRegex = /^\d+$/;
        if(numbersOnlyRegex.test(text)){
            const age=parseInt(document.getElementById('val').value/365)
            let curr_Date=new Date()
            let curr_yr=curr_Date.getFullYear()
            if (age) {
                const existingData = JSON.parse(localStorage.getItem("formData"));
                for (let i = 0; i < existingData.length; i++) {
                    var bdayyr = new Date(existingData[i].date);
                    var today = new Date()
                    var Age = Math.floor(((today - bdayyr) / (1000 * 60 * 60 * 24))/365)
                    if(Age <= age){
                        displayContext(existingData[i])
                    }
                }
            }
        }
        else{
            var quantity = parseInt(text); 
            var unit = text.slice(-2).toLowerCase(); 
            if (!isNaN(quantity)) { 
                if (unit === 'kb') {
                    var bytes = 1000 * quantity; 
                } else if (unit === 'mb') {
                    var bytes = 1000000 * quantity; 
                } else {
                    console.log("Invalid unit", quantity, unit);
                }
            } else {
                console.log("Invalid quantity", quantity, unit)
            }

            const existingData=JSON.parse(localStorage.getItem("formData"))
            for(let i=0;i<existingData.length;i++){
                if(existingData[i].imgSize<=bytes){

                    displayContext(existingData[i])
                }
            }
         }
    }
}



document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
});
