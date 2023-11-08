

const Events = () => {
    return (
        <div className="my-10 mx-5">
            <div className="text-right">
                <p className="text-pink-600">Upcoming Events</p>
                <h2 className="text-4xl font-semibold"> CareerFairs</h2>
            </div>
            <div className="md:flex w-full items-center gap-24">
                <div className="">
                    <img className="w-full" src="https://i.ibb.co/YQvWCV1/image.png" alt="img" />
                </div>
                <div className="text-right">
                    <p>The <span className="text-pink-600">Career Center</span> Expo is the perfect place to find a job that fits you. Come meet over 1,000 employers in various sectors and make your next career move!</p>
                    <button className="btn mt-10 btn-secondary normal-case">Find Out More</button>
                </div>
            </div>
        </div>
    );
};

export default Events;