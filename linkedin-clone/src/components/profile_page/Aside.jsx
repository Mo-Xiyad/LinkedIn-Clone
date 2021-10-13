import SideContent from "./SideContent";
import { fetchData } from "../../assats/js";
import { useState, useEffect } from "react";
import Peopleviewed from "./Peopleviewed";

const Aside = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const data = [];

  useEffect(() => {
    let getData = async () => {
      let dataFromEndpoint = await fetchData("", "GET");

      for (let i = 0; i < 10; i++) {
        setUserData(dataFromEndpoint[i]);
        data.push(dataFromEndpoint[i]);
      }
      console.log("Aside ---------------------");
      console.log(data);
      console.log(userData);
      // setIsLoading(false);
    };
    getData();
    console.log(userData);
  }, []);

  return (
    <aside class="col-sm-4 col-md-4 col-lg-4">
      <SideContent />
      <Peopleviewed />
      <SideContent />
      <SideContent />
      <SideContent />
      <SideContent />
      <SideContent />
    </aside>
  );
};
export default Aside;
