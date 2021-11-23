import axios from "axios"
let baseUrl = "http://localhost:3030/socials"

//---------------Get Data ---------------

export const GetList = async () => {
    const data = await axios
      .get(baseUrl)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => {
          return err
      });
    return data;
  };
  //---------------Delete Item ---------------

export const DeleteItem = async (Id:number) => {
  const data = await axios
    .delete(`${baseUrl}/${Id}`)
    .then((res) => {
      if (res.status === 200) {
        return res;
      }
    })
    .catch((err) => {
        return err
    });
  return data;
};