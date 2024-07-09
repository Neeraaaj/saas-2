import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
       
        <section className='mt-[5vh] bg-transparent rounded-2xl'>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 rounded-2xl bg-transparent">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 rounded-2xl bg-transparent">
                <div className="relative z-10 lg:py-16">
                    <div className="relative h-64 sm:h-80 lg:h-full">
                    <Image
                        alt=""
                        src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/b41914ba64c93b94981a62b2e88293b6c849b855"
                        className="absolute inset-0 h-full w-full object-cover rounded-3xl ml-10 shadow-lg"
                        width={300}
                        height={300}
                    />
                    </div>
                </div>

                <div className="relative flex items-center bg-gray-100 rounded-2xl">
                       

                        <div className="p-8 sm:p-16 lg:p-24">
                        <h2 className="text-2xl font-bold sm:text-3xl font-serif">
                            More Services comming soon...
                        </h2>

                        <p className="mt-4 text-gray-600">
                            we are currently hiring for flutter developers to make this idea into real world implementation.

                            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-10 " role="alert">
                                <span className="font-serif">Attention!</span> It`&apos`s a unpaid internship, but with a silver lining of getting a full time opportunity!
                            </div>
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=patilneeraj2003@gmail.com"
                            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Get in touch
                        </a>
                        </div>
                    </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default About