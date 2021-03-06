import Footer from "components/website/footer";
import Header from "../components/admin/header";
import Nav from "../components/admin/nav";

const AdminLayout = (props) => {
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav></Nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {props.children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
