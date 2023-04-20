let getChildDetails = async (setChildDetails) => {
  
    let myCookie = document.cookie;
    const token = myCookie.split(" ")[0].split("=")[1];
    const email = myCookie.split(" ")[1].split("=")[1].replace("%40", "@");
    let result = await fetch("http://localhost:7777/child/childDetails", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      setChildDetails(result);
    } else {
      console.log("no record");
    }
  };
  export default getChildDetails;