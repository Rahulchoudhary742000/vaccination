import getChildDetails from "../user data/getChildDetails";
async function DeleteChildDetails(props){
   
    let myCookie = document.cookie;
    const token = myCookie.split(" ")[0].split("=")[1];
    let _id=props;
   alert()
    let result = await fetch("http://localhost:7777/child/childDetailsDelete", {
        method:"delete",
        body: JSON.stringify({_id}),
        headers: {
          authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if(result){
        getChildDetails();
      }
}
export default DeleteChildDetails;