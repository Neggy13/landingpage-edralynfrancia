import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/Moon" activeStyle>
			Moon
		</NavLink>
		
		<NavLink to="/Sunset" activeStyle>
			Sunset
		</NavLink>
		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
