

const UserGuideline = () => {
    return (
        <div className="my-10 mx-5">
            <div className="text-left">
                <h2 className="text-4xl font-semibold">User Guidelines</h2>
                <p>Get to know <span className="text-pink-600">Career Center</span></p>
            </div>
            <div className="md:flex flex-row-reverse justify-around items-center gap-24">
                <div>
                    <img src="https://i.ibb.co/4M2yHhG/image.png" alt="img" />
                </div>
                <div className="text-right">
                    <div className="space-y-5">
                        <h4 className="text-3xl"><span className="text-pink-600">Career Center</span> Jobseekers Guide</h4>
                        <button className="btn btn-secondary btn-outline normal-case">Download Here</button>
                    </div>
                    <div className="space-y-5 mt-16">
                        <h4 className="text-3xl"><span className="text-pink-600">Career Center</span> Employers Guide</h4>
                        <button className="btn btn-secondary btn-outline normal-case">Download Here</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserGuideline;