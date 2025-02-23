import { useRouteError } from "react-router-dom"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <div>
                <Link to="/">
                    <span >Back to homepage</span>
                </Link>
            </div>
        </div>
    )
}
export default ErrorPage;