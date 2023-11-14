import React from "react";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';


const View = () => {
    return ( <>
        <div className="surface-0">
            <div>
                <div className="aboutUs--Hero">
                    <div className="grid grid-nogutter relative z-4 text-white">
                        <div className="col-12 md:col-6 md:mx-auto p-6 text-center flex align-items-center">
                            <section>
                                <div className="text-6xl text-primary font-bold mb-1">About Us</div>
                                <span className="text-4xl font-bold mb-3">Fermentum et sollicitudin</span>
                                <p className="mt-0 mb-4 text-200 line-height-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                
                                <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                                <Button label="Live Demo" type="button" className="p-button-outlined bg-white hover:bg-gray-100" />
                            </section>
                        </div>
                    </div>
                </div>

                <div id="highlights" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                    <div className="text-center">
                        <h2 className="text-900 font-normal mb-2">Powerful Everywhere</h2>
                        <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                    </div>

                    <div className="grid mt-8 pb-2 md:pb-8">
                        <div className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0" style={{ borderRadius: '8px' }}>
                            <img src={require('../assets/img/mockup.png')} className="w-11" alt="mockup mobile" />
                        </div>

                        <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
                            <div
                                className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Congue Quisque Egestas</h2>
                            <span className="text-700 text-2xl line-height-3 ml-0 md:ml-2" style={{ maxWidth: '650px' }}>
                                Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.
                            </span>
                        </div>
                    </div>

                    <div className="grid my-8 pt-2 md:pt-8">
                        <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
                            <div
                                className="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
                                style={{
                                    width: '4.2rem',
                                    height: '4.2rem',
                                    borderRadius: '10px'
                                }}
                            >
                                <i className="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
                            </div>
                            <h2 className="line-height-1 text-900 text-4xl font-normal">Celerisque Eu Ultrices</h2>
                            <span className="text-700 text-2xl line-height-3 mr-0 md:mr-2" style={{ maxWidth: '650px' }}>
                                Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
                            </span>
                        </div>

                        <div className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0" style={{ borderRadius: '8px' }}>
                            <img src={require('../assets/img/mockup-desktop.png')} className="w-11" alt="mockup desktop" />
                        </div>
                    </div>
                </div>
                
                <div className="py-4 px-4 lg:px-8 mx-0 my-6 bg-gray-200">
                    <div className="text-700 text-center py-5">
                        <div className="text-blue-600 font-bold mb-3">
                            <i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD
                        </div>
                        <div className="text-900 font-bold text-5xl mb-3">Join Our Community</div>
                        <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                        <Button label="Join Now" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
                    </div>
                </div>

            </div>
        </div>
    </> );
}

export default View