import React, { useState, useEffect } from "react";
import Profile from "./Components/Profile";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const usersArr = [
    {
      name: "Peter Obi",
      bio: "Peter Obi is a prominent Nigerian politician and businessman. He served as the Governor of Anambra State and is known for his efforts to improve education and infrastructure in the state",
      dob: " 19th-July- 1961",
    },
    {
      name: "Ngozi Okonjo-Iweala",
      bio: "Ngozi Okonjo-Iweala is an economist and international development expert who currently serves as the Director-General of the World Trade Organization (WTO).",
      dob: " 13-June-1954",
    },
    {
      name: "Nnamdi Kanu",
      bio: "Nnamdi Kanu is a political activist and the leader of the Indigenous People of Biafra (IPOB), advocating for the independence of the Biafran region from Nigeria.  He is a controversial figure due to his stance on Biafran independence.",
      dob: "25-September-1967",
    },
    {
      name: "Chimamanda Ngozi Adichie",
      bio: "Chimamanda Ngozi Adichie is an acclaimed Nigerian writer known for her novels, essays, and public speaking, half of a Yellow Sun and Americanah are some of her works. she explore themes of identity and feminism.",
      dob: "15-September-1977",
    },
    {
      name: "Asisat Oshoala",
      bio: "Asisat Oshoala MON is a Nigerian professional footballer who plays as a striker for NWSL club Bay FC and the Nigeria women national team",
      dob: "9-October-1994",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setUsers(usersArr);
      setLoading(false);
    }, 5000);
  }, []);

  // return (
  //   <>
  //     {loading ? (
  //       <div className="loading ">loading...</div>
  //     ) : (
  //       <Profile gladusers={users} />
  //     )}{" "}
  //   </>
  // );


  return (
    <>
      {loading ? (
        <div className=" py-5 px-10 text-2xl flex  items-center justify-center text-red-950 ">loading...</div>
      ) : (
        <Profile gladusers={users} />
      )}{" "}
    </>
  );
};

export default App;
