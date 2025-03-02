

function getInnerTextByID (id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
    
}


function setInnerTextByIDandValue (id,value){
    document.getElementById(id).innerText = value;


}

function setCurrentTime (){
    let now = new date ();
    let timeString = now.toLocalTimeString ();

    console.log(timeString)
}