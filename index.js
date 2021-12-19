let p = document.createElement("p");
let main = document.querySelector("main");

let menos = document.getElementById("menos");
let mais = document.getElementById("mais");

let maisUM = 0;

mais.addEventListener("click", (e) => {
    maisUM++;
    p.innerText = maisUM;
    main.append(p);
});

menos.addEventListener("click", (e) => {
    maisUM--;
    p.innerText = maisUM;
    main.append(p);
});



