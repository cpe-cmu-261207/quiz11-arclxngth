//your code here!

const modify = document.getElementById("button-compute")
modify.addEventListener("click", function() {
    let element = document.createElement("p")

    const input = document.getElementById("input-number")

    let list = document.getElementById("compute-result")

    element = +input.value - 5;

    list.append(element)
})

// -------------------------------------------------

const table = document.getElementById("button-create-table")
table.addEventListener("click", function(){
    const row = document.getElementById("input-row")
    const clm = document.getElementById("input-col")

    let table = document.getElementById("table")

    for(let r of row){
        let Row = table.insertRow();
        let element = "1";
        
    }
    

    
})
