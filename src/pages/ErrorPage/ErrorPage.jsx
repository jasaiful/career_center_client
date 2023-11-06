import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="md:flex justify-center p-10 flex-row-reverse gap-5">
            <div className="w-full md:w-1/2">
                <img className="" src="https://i.ibb.co/X2xhYkH/image.png" alt="" />
            </div>
            <div className="w-1/2 mt-36 space-y-8 text-center">
                <h3 className="text-4xl font-semibold">Oops!!!</h3>
                <p className="text-2xl font-semibold text-pink-600">Sorry, an unexpected error has occurred.</p>
                <p className="text-xl">
                    <i>
                        {error.statusText || error.message}
                    </i>
                </p>
                <Link to='/'><button className="btn mt-10 btn-secondary normal-case font-bold">Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;