import Footer from "../components/website/footer"
import Header from "../components/website/header"

const   WebsiteLayout = (props) => {
    return (
        <>
            <Header>Header website</Header>
            <div className="container">
                <main>{props.children}</main>
            </div>
            <Footer>Footer</Footer>
        </>
    )
}

export default WebsiteLayout