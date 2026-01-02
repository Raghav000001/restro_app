import React, { useEffect, useState } from "react";

const useRestroMenu = (id) => {
  const [menu, setMenu] = useState({});

  useEffect(()=> {
    fetchMenu()
  },[])

  const fetchMenu = async () => {
    try {
      const menu = await fetch(`http://localhost:3500/${id}`);
      const menuJson = await menu.json();
      const finalMenu = menuJson?.menu;
      console.log(menuJson);
      setMenu(finalMenu);
    } catch (error) {
      console.log(error, "error in fetching menu data");
    }
  };

  return menu;
};

export default useRestroMenu;
