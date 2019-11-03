import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function NavBar() {
  return (
   <nav>
      <div className="container">
         <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Clicky Game</a>
         </div>
      </div>
   </nav>
  );
}

export default NavBar;
