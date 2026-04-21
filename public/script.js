
async function topUp(){
 const userId=document.getElementById("userId").value;
 const productCode=document.getElementById("nominal").value;

 const res=await fetch("/api/topup",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({userId,productCode})
 });

 const data=await res.json();
 document.getElementById("result").innerText="RefID: "+data.refId;
}
