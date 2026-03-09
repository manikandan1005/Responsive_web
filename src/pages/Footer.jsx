import React from 'react'

export default function Footer() {
    const footerText = {
        companyInfo: [
            "About Us",
            "Carrier",
            "We are hiring",
            "Blog"
        ],
        legal: [
            "About Us",
            "Carrier",
            "We are hiring",
            "Blog"
        ],
        features: [
            "Business Marketing",
            "User Analytic",
            "Live Chat",
            "Unlimited Support"
        ],
        resources: [
            "IOS & Android",
            "Watch a Demo",
            "Customers",
            "API"
        ],
        getInTouch: [
            "(480) 555-0103",
            "4517 Washington Ave. Manchester, Kentucky 39495",
            "debra.holt@example.com"
        ]
    };
    return (
        <div className='flex  mx-10 lg:mx-45 items-center justify-center  lg:py-25 text-gray-600' >
            <div className='grid grid-cols-2 gap-10 lg:gap-1 md:grid-cols-3 lg:grid-cols-5'>
                <div className='flex flex-col gap-3'>
                    <h1 style={{ color: "#000", fontWeight: 700, }}>Company Info</h1>
                    <div className='flex flex-col'>
                        {
                            footerText.companyInfo.map((i) => (

                                <p className='text-sm'>{i}</p>

                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 style={{ color: "#000", fontWeight: 700 }}>legal</h1>
                    <div className='flex flex-col'>
                        {
                            footerText.legal.map((i) => (

                                <p className='text-sm'>{i}</p>

                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 style={{ color: "#000", fontWeight: 700 }}>Features</h1>
                    <div className='flex flex-col'>
                        {
                            footerText.features.map((i) => (

                                <p className='text-sm'>{i}</p>

                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 style={{ color: "#000", fontWeight: 700 }}>Resources</h1>
                    <div className='flex flex-col!'>
                        {
                            footerText.resources.map((i) => (

                                <p className='text-sm'>{i}</p>

                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 style={{ color: "#000", fontWeight: 700 }}>Get In Touch</h1>
                    <div className='flex flex-col! '>
                        {
                            footerText.getInTouch.map((i) => (
                                
                                <p className='text-sm'>{i}</p>

                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
