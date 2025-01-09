import { Outlet, Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        deleniti sint laborum alias magnam nostrum eum illo aperiam aut mollitia
        iste, explicabo asperiores. Sed aliquid voluptas quia dolores voluptate!
        Blanditiis.
      </p>

      <ul>
        <li>
          <Link to="contacts">Contacts</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
      </ul>

      {/* <Routes>
        <Route path="contacts" element={<h1>Contacts</h1>} />
        <Route path="team" element={<h1>Team</h1>} />
      </Routes> */}
      <Outlet/>
    </div>
  );
};
