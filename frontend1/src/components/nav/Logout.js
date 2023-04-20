
async function Logout(){
    let result=await fetch('http://localhost:7777/user/logout',{
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
     })
     result=await result.json();
     if(result){
       
     }
     
}
export default Logout;