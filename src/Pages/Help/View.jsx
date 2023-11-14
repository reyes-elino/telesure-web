import React from "react";
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';


const View = () => {
    return ( <>
        <div className="surface-0">
            <div>
                <div className="aboutUs--Hero">
                    <div className="grid grid-nogutter relative z-4 text-white">
                        <div className="col-12 md:col-6 md:mx-auto p-6 text-center flex align-items-center">
                            <section>
                                <div className="text-6xl text-primary font-bold mb-1">Need Help?</div>
                                <span className="text-4xl font-bold mb-3">Fermentum et sollicitudin</span>
                                <p className="mt-0 mb-4 text-200 line-height-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                
                                <Button label="Learn More" type="button" className="p-button-raised" />
                            </section>
                        </div>
                    </div>
                </div>

                <div className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
                    <div className="text-center mb-5">
                        <h2 className="text-900 font-normal mb-2">Frequently Ask Question</h2>
                        <span className="text-600 text-2xl">Amet consectetur adipiscing elit...</span>
                    </div>
                    
                    <div>
                        <Accordion activeIndex={0}>
                            <AccordionTab header="Question #1">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                    id est laborum.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Question #2">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Question #3">
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                    minus.
                                </p>
                            </AccordionTab>
                        </Accordion>
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