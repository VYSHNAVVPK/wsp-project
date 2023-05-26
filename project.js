function sendmail(){
    var params = }
   name:document.getElementById("name").value,
    document.getElementById("email").value,
    document.getElementById("message").value 
const service ="service_8k6qfx9";
const template ="template_wzwy10w"
ElementInternals.js.send(serviceId,templateId,params)
.then{
    res =>{
      document.getElementById("name").value -"";
      document.getElementById("email").value-"";
      document.getElementById("message").value-"";  
      console.log(res);
      };
     alert {"your message send successfully"};
   .catch(err=>console.log(err));