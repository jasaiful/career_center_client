

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                {/* slide-1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img className="w-full rounded-xl" src='https://i.ibb.co/RhTjbCw/image.png' alt="" />
                    <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-80">
                        <div className='text-white space-y-7 text-right pr-12'>
                            <h2 className='text-6xl className  font-bold'>Find the role <br /> that is right for you.</h2>
                            <p>Your job search starts here...</p>
                            <div>
                                <button className="btn btn-primary mr-5">Find a Job</button>
                                <button className="btn btn-secondary">Post a Job</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slide-2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img className="w-full rounded-xl" src='https://i.ibb.co/bBwMNPW/image.png' alt="" />
                    <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-80">
                        <div className='text-white space-y-7 text-right pr-12'>
                            <h2 className='text-6xl text-white font-bold'>Find the role <br /> that is right for you.</h2>
                            <p>Your job search starts here...</p>
                            <div>
                                <button className="btn btn-primary mr-5">Find a Job</button>
                                <button className="btn btn-secondary">Post a Job</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            {/* slide-3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img className="w-full rounded-xl" src='https://i.ibb.co/rtdhQ3F/image.png' alt="" />
                    <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-50">
                        <div className='text-white space-y-7 text-right pr-12'>
                            <h2 className='text-6xl className  font-bold'>Find the role <br /> that is right for you.</h2>
                            <p>Your job search starts here...</p>
                            <div>
                                <button className="btn btn-primary mr-5">Find a Job</button>
                                <button className="btn btn-secondary">Post a Job</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;