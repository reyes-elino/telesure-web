import React from "react";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';


const View = () => {
    return ( <>
        <div className="surface-0">
            <div id="home" className="landing-wrapper overflow-hidden">

                <div id="hero" className="flex flex-column overflow-hidden">
                    <div className="grid grid-nogutter surface-0 text-800">
                        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
                            <section className="xl:pl-7">
                                <span className="block text-6xl font-bold mb-1">Fermentum et sollicitudin</span>
                                <div className="text-6xl text-primary font-bold mb-3">Nec tincidunt praesent</div>
                                <p className="mt-0 mb-4 text-700 line-height-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                
                                <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                                <Button label="Live Demo" type="button" className="p-button-outlined" />
                            </section>
                        </div>
                        <div className="col-12 md:col-6 overflow-hidden">
                            <img src={require('../assets/img/hero-1.png')} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                        </div>
                    </div>
                </div>

                <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8">
                    <div className="surface-0 text-center">
                        <div className="mb-3 font-bold text-3xl">
                            <span className="text-900">One Product, </span>
                            <span className="text-blue-600">Many Solutions</span>
                        </div>
                        <div className="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
                        <div className="grid">
                            <div className="col-12 md:col-4 mb-4 px-5">
                                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 text xl mb-3 font-medium">Built for Developers</div>
                                <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                            </div>
                            <div className="col-12 md:col-4 mb-4 px-5">
                                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-lock text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 text xl mb-3 font-medium">End-to-End Encryption</div>
                                <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
                            </div>
                            <div className="col-12 md:col-4 mb-4 px-5">
                                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 text xl mb-3 font-medium">Easy to Use</div>
                                <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
                            </div>
                            <div className="col-12 md:col-4 mb-4 px-5">
                                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-globe text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 text xl mb-3 font-medium">Fast & Global Support</div>
                                <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                            </div>
                            <div className="col-12 md:col-4 mb-4 px-5">
                                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-github text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 text xl mb-3 font-medium">Open Source</div>
                                <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
                            </div>
                            <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                                <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                                    <i className="pi pi-shield text-4xl text-blue-500"></i>
                                </span>
                                <div className="text-900 text xl mb-3 font-medium">Trusted Securitty</div>
                                <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
                            </div>
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

                <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
                    <div className="text-center">
                        <h2 className="text-900 font-normal mb-2">Matchless Pricing</h2>
                        <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                    </div>

                    <div className="grid justify-content-between mt-8 md:mt-0">
                        <div className="col-12 lg:col-4 p-0 md:p-3">
                            <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                <h3 className="text-900 text-center my-5">Free</h3>
                                <img src={require('../assets/img/free.png')} className="w-10 h-10 mx-auto" alt="free" />
                                <div className="my-5 text-center">
                                    <span className="text-5xl font-bold mr-2 text-900">$0</span>
                                    <span className="text-600">per month</span>
                                    <Button label="Get Started" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                </div>
                                <Divider className="w-full bg-surface-200"></Divider>
                                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Responsive Layout</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">50 Support Ticket</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Free Shipping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                            <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                <h3 className="text-900 text-center my-5">Startup</h3>
                                <img src={require('../assets/img/startup.png')} className="w-10 h-10 mx-auto" alt="startup" />
                                <div className="my-5 text-center">
                                    <span className="text-5xl font-bold mr-2 text-900">$1</span>
                                    <span className="text-600">per month</span>
                                    <Button label="Try Free" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                </div>
                                <Divider className="w-full bg-surface-200"></Divider>
                                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Responsive Layout</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">50 Support Ticket</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Free Shipping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
                            <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                                <h3 className="text-900 text-center my-5">Enterprise</h3>
                                <img src={require('../assets/img/enterprise.png')} className="w-10 h-10 mx-auto" alt="enterprise" />
                                <div className="my-5 text-center">
                                    <span className="text-5xl font-bold mr-2 text-900">$999</span>
                                    <span className="text-600">per month</span>
                                    <Button label="Get a Quote" rounded className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"></Button>
                                </div>
                                <Divider className="w-full bg-surface-200"></Divider>
                                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Responsive Layout</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Unlimited Push Messages</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">50 Support Ticket</span>
                                    </li>
                                    <li className="py-2">
                                        <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                        <span className="text-xl line-height-3">Free Shipping</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default View