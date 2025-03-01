document.getElementById("btn-1")
.addEventListener("click",function(){
    alert("Board Updated Successfully");
    const task = getInnerTextByID("task");
    const result = task-1;
    setInnerTextByIDandValue("task",result);
    const main = getInnerTextByID("main");
    const result1 = main + 1;
    setInnerTextByIDandValue("main",result1);
    const button = document.getElementById("btn-1");
    button.disabled = true;

    const container = document
    .getElementById("history");
    const div = document.createElement("div");
    div.innerHTML = `
    <p>Rakib</>
    `
    container.appendChild(div);
    
    document.getElementById("btn-clear")
    .addEventListener("click",function(){
        div.innerHTML = " ";
    
        
    })
    

})


document.getElementById("btn-2")
.addEventListener("click",function(){
    alert("Board Updated Successfully");
    const task = getInnerTextByID("task");
    const result = task-1;
    setInnerTextByIDandValue("task",result);
    const main = getInnerTextByID("main");
    const result1 = main + 1;
    setInnerTextByIDandValue("main",result1);
    const button = document.getElementById("btn-2");
    button.disabled = true;

    const container = document
    .getElementById("history");
    const div = document.createElement("div");
    div.innerHTML = `
    <p>Rakib</>
    `
    container.appendChild(div);


        document.getElementById("btn-clear")
    .addEventListener("click",function(){
        div.innerHTML = " ";
    
        
    })
    



})
document.getElementById("btn-3")
.addEventListener("click",function(){
    alert("Board Updated Successfully");
    const task = getInnerTextByID("task");
    const result = task-1;
    setInnerTextByIDandValue("task",result);
    const main = getInnerTextByID("main");
    const result1 = main + 1;
    setInnerTextByIDandValue("main",result1);
    const button = document.getElementById("btn-3");
    button.disabled = true;


    const container = document
    .getElementById("history");
    const div = document.createElement("div");
    div.innerHTML = `
    <p>Rakib</>
    `
    container.appendChild(div);

    document.getElementById("btn-clear")
    .addEventListener("click",function(){
        div.innerHTML = " ";
    
        
    })
    



})
document.getElementById("btn-4")
.addEventListener("click",function(){
    alert("Board Updated Successfully");
    const task = getInnerTextByID("task");
    const result = task-1;
    setInnerTextByIDandValue("task",result);
    const main = getInnerTextByID("main");
    const result1 = main + 1;
    setInnerTextByIDandValue("main",result1);
    const button = document.getElementById("btn-4");
    button.disabled = true;


    const container = document
    .getElementById("history");
    const div = document.createElement("div");
    div.innerHTML = `
    <p>Rakib</>
    `
    container.appendChild(div);

    document.getElementById("btn-clear")
    .addEventListener("click",function(){
        div.innerHTML = " ";
    
        
    })
    


})
document.getElementById("btn-5")
.addEventListener("click",function(){
    alert("Board Updated Successfully");
    const task = getInnerTextByID("task");
    const result = task-1;
    setInnerTextByIDandValue("task",result);
    const main = getInnerTextByID("main");
    const result1 = main + 1;
    setInnerTextByIDandValue("main",result1);
    const button = document.getElementById("btn-5");
    button.disabled = true;



    const container = document
    .getElementById("history");
    const div = document.createElement("div");
    div.classList.add("font-bold")
    div.innerHTML = `
     <p>You have completed the task Fix Mobile Button Issue </>
    `
    container.appendChild(div);
    document.getElementById("btn-clear")
    .addEventListener("click",function(){
        div.innerHTML = " ";
    
        
    })
    


})
document.getElementById("btn-6")
.addEventListener("click",function(){
    alert("Board Updated Successfully");
    const task = getInnerTextByID("task");
    const result = task-1;
    setInnerTextByIDandValue("task",result);
    const main = getInnerTextByID("main");
    const result1 = main + 1;
    setInnerTextByIDandValue("main",result1);
    const button = document.getElementById("btn-6");
    button.disabled = true;



    const container = document
    .getElementById("history");
    const div = document.createElement("div");
    div.classList.add("font-bold")
    div.innerHTML = `
    <p>You have completed the task Fix Mobile Button Issue </>
    `
    container.appendChild(div);
    
    document.getElementById("btn-clear")
    .addEventListener("click",function(){
        div.innerHTML = " ";
    
        
    })

})



document.getElementById("btn-clear")
.addEventListener("click",function(){
    // const div = document.createElement("div");
    div.innerHTML = " ";

    
})

