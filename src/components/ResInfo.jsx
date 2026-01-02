import { useParams } from "react-router-dom";
import useFetchDataById from "../hooks/useFetchDataById";
import useRestroMenu from "../hooks/useRestroMenu";

const ResInfo = () => {
  const { id } = useParams();
  const data = useFetchDataById(id);
  const menu = useRestroMenu(id);
  console.log(menu);

  return (
    // todo => display info like = timings,restro name ,image, ratings

    <div>
      <div>
        {/* <img src="" alt="" /> */}
        <h1>{data.name}</h1>
        <h2>{data.avgRating}</h2>
      </div>
      {/* menu */}
      {Object.entries(menu).map(([categoryName, items]) => (
        <div key={categoryName}>
          <h2> {categoryName} </h2>

          {items.map((item) => (
            <div>
              {item.name}
              {item.price}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResInfo;
