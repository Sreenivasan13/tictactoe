//button
        const button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.innerText = "Reset";
        document.body.appendChild(button);

        //table
        const table = document.createElement("table");
        table.style.border = "0";
        document.body.appendChild(table);
        const tr = document.createElement("tr");
        table.appendChild(tr);
        
         for(var i = 1; i < 4; i++){
             const td = document.createElement("td");
             td.setAttribute("id", i);
            // td.innerText = i;
             td.style.width = 100 + "px";
             td.style.height = 100 + "px";
             td.style.background = "black";
             td.style.color = "white";
             td.style.textAlign = "center";
             td.style.fontSize = 3 + "rem";
             td.style.lineHeight = 100 + "px";
             tr.appendChild(td);
         }
        const tr1 = document.createElement("tr");
        table.appendChild(tr1);
        for(var i = 4; i < 7; i++){
            const td1 = document.createElement("td");
            td1.setAttribute("id", i);
           // td1.innerText = i;
            td1.style.width = 100 + "px";
            td1.style.height = 100 + "px";
            td1.style.background = "black";
            td1.style.color = "white";
            td1.style.textAlign = "center";
            td1.style.fontSize = 3 + "rem";
            td1.style.lineHeight = 100 + "px";
            tr1.appendChild(td1);
        }
        const tr2 = document.createElement("tr");
        table.appendChild(tr2);
        for(var i = 7; i < 10; i++){
            const td2 = document.createElement("td");
            td2.setAttribute("id", i);
           // td2.innerText = i;
            td2.style.width = 100 + "px";
            td2.style.height = 100 + "px";
            td2.style.background = "black";
            td2.style.color = "white";
            td2.style.textAlign = "center";
            td2.style.fontSize = 3 + "rem";
            td2.style.lineHeight = 100 + "px";
            tr2.appendChild(td2);
        }
    // event 
    const blocks = document.querySelector("table");
    const reset = document.querySelector("button");

     let selected = [];
     let player = '';
     blocks.addEventListener("click", (e) =>{
           if(selected.length <= 9){
               let id = e.target.id;
               player == "O" ? output(id, "X"):output(id, "O");
               selected.push(id);
           }
     });

     reset.addEventListener("click", ()=>{
           selected.forEach(x => output(x, ""));
           selected = [];
     });

      function output(id, val){
           player = val;
           document.getElementById(id).innerHTML = val;
      }

    
