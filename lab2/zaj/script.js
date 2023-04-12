"use strict"

const adder = () => {
    const a = document.getElementById("number-a").value;
    const b = document.querySelector("#number-b").value;
    
    console.log(a);
    console.log({b});

    const numA = Number(a);
    const numB = Number(b);

    if(isNaN(numA) || isNaN(numB)){
        // alert("Niepoprawne dane.");
        $("#modal").show("slow");
        $("#modal").off("click").click(() => {
            $("#modal").hide("slow");
        });

        return;
    }

    const sum = numA + numB;

    console.log(`${numA} + ${numB} = ${sum}`);

    const listOfOperations = document.getElementById("operations-list");

    const p = document.createElement("p");

    p.innerHTML = `${numA} + ${numB} = ${sum}`;

    listOfOperations.append(p);
}
