import { DefultExample } from "../BaseUi/UiMediaobject/UiMediaobjectCode"

const Navbar_section = () => {
    return (
    <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
    )
}
export default Navbar_section;