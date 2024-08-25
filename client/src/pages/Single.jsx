import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="img"
        />
        <div className="user">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            alt=""
          />
          <div className="info">
            <p>
              <span>Susan</span>
              <br />
              Posted 2 days ago
            </p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sit debitis deserunt repellendus numquam ab vel
          perspiciatis corporis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. A possimus excepturi aliquid nihil
          cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis
          deserunt repellendus numquam ab vel perspiciatis corporis! Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
          possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea
          dolorem ratione sitm, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus
          numquam ab vel perspiciatis corporis! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. A possimus excepturi aliquid nihil
          cumque ipsam facereque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserspiciatis corporis! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam
          facere am ab vel perspiciatis
          corporis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis! debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
