import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditChildDetails from "../child/EditChildDetails";
import DeleteChildDetails from '../child/DeleteChildDetails';
import getChildDetails from "../user data/getChildDetails";
function Dashboard() {
  const nevigate = useNavigate();
  const [childDetails, setChildDetails] = useState("");
  const [childId, setChildId] = useState({ _id: "" });
  const [edit, setEdit] = useState(false);
  const [childInfo, setChildInfo] = useState({
    name: "",
    dob: "",
    tob: "",
    gender: "",
    weight: "",
    height: "",
    head: "",
    cursion: "",
  });
  useEffect(() => {
    const cookie = document.cookie;
    if (!cookie) {
      nevigate("/");
    } else {
      getChildDetails(setChildDetails);
    }
  },[childDetails]);

//  useEffect(()=>{
//   getChildDetails(setChildDetails);
//  },[getChildDetails])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Dashboard</h1>
          </div>
          {childDetails.length > 0 ? (
            childDetails.map((item, index) => (
              <div className="col-sm-4" key={index}>
                <div className="card border-success mb-3">
                  <div className="card-header bg-transparent border-success">
                    {item.name}
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title text-success">Child Details</h5>
                    <p className="card-text">dob : {item.dob}</p>
                    <p className="card-text">tob : {item.tob}</p>
                    <p className="card-text">gender : {item.gender}</p>
                    <p className="card-text">weight : {item.weight}</p>
                    <p className="card-text">height : {item.height}</p>
                    <p className="card-text">head : {item.head}</p>
                    <p className="card-text">cursion : {item.cursion}</p>
                  </div>
                  <div
                    className="card-footer bg-transparent border-success"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setEdit(true);
                        setChildInfo({
                          name: item.name,
                          dob: item.dob,
                          tob: item.tob,
                          gender: item.gender,
                          weight: item.weight,
                          height: item.height,
                          head: item.head,
                          cursion: item.cursion,
                        });
                        setChildId(item._id);
                      }}
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger"
                     onClick={()=>{
                        DeleteChildDetails(item._id,getChildDetails)
                     }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-sm-12" style={{height:'20rem'}}>
              <h3>No Record's</h3>
            </div>
          )}
        </div>
      </div>
      {edit ? (
        <EditChildDetails
          childInfo={childInfo}
          edit={setEdit}
          childId={childId}
          getChildDetails={getChildDetails}
        />
      ) : null}
    </>
  );
}
export default Dashboard;
