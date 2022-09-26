import React from "react";
import localData from "../data/repositories";

const useRepositories = () => {
  const [data, setData] = React.useState(undefined);

  const fetchData = async () => {
    const res = await global.fetch(""); //"http://localhost:19006/api/repositories"
    const data = await res.json();
    setData(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const dataNodes = data ? data.edges.map((edge) => edge.node) : [];
  return localData; // dataNodes
};

export default useRepositories;
