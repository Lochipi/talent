import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  handleClick: () => void;
  nav: boolean;
}

const MobileMenuToggle: React.FC<Props> = ({ handleClick, nav }) => (
  <div onClick={handleClick} className="z-10 md:hidden">
    {!nav ? <FaBars /> : <FaTimes />}
  </div>
);

export default MobileMenuToggle;
