import React  from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VscSearchStop } from "react-icons/all";
import FadeDiv from "../../components/FadeDiv";
import "./not-found.scss";



const NotFound = () => {
  

  return (
    <div className="NotFound fadeInDown">
      <FadeDiv className="wrapper" direction="none">
        <VscSearchStop />

        <h1>404</h1>
        <p>Oops! The page you are looking for doesn't exist.</p>

        <Link className="btn btn-theme" to="/">
          <motion.div
            whileHover={{
              scale: 1.15,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="button-go-home"
          >
            Go Home
          </motion.div>
        </Link>
      </FadeDiv>
    </div>
  );
};
export default NotFound;
