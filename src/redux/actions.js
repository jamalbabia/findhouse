import axios from "axios";

export function addHouse(id, title, photo, prix, day) {
  return { type: "ADD_HOUSE", payload: { id, title, photo, prix, day  } };
}
export function deleteHouse(id) {
  return { type: "DELETE_HOUSE", payload: { id } };
}

export function incrementerDay(id) {
  return { type: "INCREMENTER_DAY", payload: { id } };
}
export function viewHouse(id,title,photo,prix,day) {
  return { type: "VIEW_HOUSE", payload: { id,title,photo,prix,day } };
}
export function hideHouse() {
  return { type: "HIDE_HOUSE"};
}


export function viderHouse() {
  return { type: "VIDER_HOUSE" };
}

export function decrementerDay(id) {
  return { type: "DECREMENTER_DAY", payload: { id } };
}


export function uploadPhotos(imagePath){
  return{type:"IMPORT_IMAGE",payload:imagePath}
}


export function fetch_house_success(houses) {
  return { type: "FETCH_HOUSES_SUCCESS", payload: houses };
}

export function fetch_house_request() {
  return { type: "FETCH_HOUSES_REQUEST" };
}

export function fetch_house_failure(err) {
  return { type: "FETCH_HOUSES_FAILURE", payload: err };
}

export function fetchHouse() {
  return function (dispatch, getState) {
    dispatch(fetch_house_request());  
    axios.get("http://localhost:3500/houses")
      .then((resp) => dispatch(fetch_house_success(resp.data)))
      .catch((err) => dispatch(fetch_house_failure(err)));
  };
}
