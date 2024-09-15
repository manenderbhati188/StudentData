const submitform=document.getElementById("student-form");

const editrow=(row)=>{
    const cells=row.getElementsByTagName("td");
    document.getElementById("name").value=cells[0].textContent;
    document.getElementById("student-id").value=cells[1].textContent;
    document.getElementById("email").value=cells[2].textContent;
    document.getElementById("contact").value=cells[3].textContent;
    row.remove();
}
const deleterow=(row)=>{
    row.remove();
}
submitform.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.getElementById("name").value;
    const id = document.getElementById("student-id").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;


    const tableBody = document.getElementById("student-table").getElementsByTagName("tbody")[0];
    const tr=document.createElement("tr");
    
    const cell1=document.createElement("td");
    cell1.textContent=name;
    tr.appendChild(cell1);    

    const cell2=document.createElement("td");
    cell2.textContent=id;
    tr.appendChild(cell2); 

    const cell3=document.createElement("td");
    cell3.textContent=email;
    tr.appendChild(cell3); 

    const cell4=document.createElement("td");
    cell4.textContent=contact;
    tr.appendChild(cell4); 

    const cell5 = document.createElement("td");
    const editbtn=document.createElement("button");
    editbtn.textContent="Edit"
    editbtn.addEventListener("click",()=>editrow(tr));
    cell5.appendChild(editbtn);
    tr.appendChild(cell5);

    const deletebtn =document.createElement("button");
    deletebtn.textContent="Delete";
    cell5.appendChild(deletebtn);
    
    deletebtn.addEventListener("click",()=>deleterow(tr));
    



    tableBody.appendChild(tr);

    submitform.reset();
 
});
