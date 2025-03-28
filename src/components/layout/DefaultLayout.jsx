import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div>
      {/* nav bar  */}
      <Header />
      {/* actual content  */}
      <main className="main">
        <Outlet />
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
};
