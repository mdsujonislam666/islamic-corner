import React from 'react';
import alquran from "../../assets/alquran.jpg";
import tosbi from "../../assets/tosbi.jpg";
import jainamaj from "../../assets/jainamaj.jpg"


const Sliders = () => {
    return (
        <section className="lg:mx-32 py-5 flex flex-col items-center">
            <div className="space-y-4 mb-14">
                <h2 className="text-5xl text-black font-extrabold text-center">Update<span className="text-red-500">Product</span>
                </h2>
                <h3 className="text-2xl text-black text-center">For your safe purchase and best choice's</h3>
            </div>

            <div className="carousel w-full bg-orange-200  lg:h-[600px]">
                <div id="slide1" className="carousel-item relative w-full  ">
                    <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
                        <div className="flex-1 space-y-7 py-20">
                            <h3 className="text-3xl font-bold">Al-Quran</h3>
                            <p>The Prophet ﷺ said:

                                “Do not forget the Qur’an, for it escapes from the hearts faster than a camel escapes when its rope is untied.”</p>
                            <button className="btn bg-bike-primary text-white btn-warning">Purchase</button>
                        </div>
                        <div className="flex-1 py-24">
                            <img src={alquran} className="w-[400px] lg:mx-20" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1 py-20">
                            <h3 className="text-3xl font-bold">Islamic Tasbih</h3>
                            <p>The Prophet ﷺ said:

                                “Count your dhikr on your fingers, for they will testify for you on the Day of Resurrection.”</p>
                            <button className="btn bg-bike-primary text-white btn-warning">Purchase</button>
                        </div>
                        <div className="flex-1 py-24 ">
                            <img src={tosbi} className="lg:mx-20 h-[150px] lg:h-[200px] w-[400px]" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row gap-20 p-4 lg:p-24">
                        <div className="flex-1 space-y-7 py-20">
                            <h3 className="text-3xl font-bold">Islamic Jainamaj</h3>
                            <p>Sahih Bukhari (381)

                                Anas (RA) said:
                                “I saw the Prophet ﷺ praying on a mat woven from palm leaves.”</p>
                            <button className="btn bg-bike-primary text-white btn-warning">Purchase</button>
                        </div>
                        <div className="flex-1 py-24">
                            <img src={jainamaj} className="w-[400px] h-[150px] lg:h-[200px] lg:mx-20" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sliders;