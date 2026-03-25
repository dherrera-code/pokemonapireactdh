import React from 'react'

const DisplayEvolutions = () => {
    return (
        <section className="lg:row-start-2 bg-[#FAFAFA]/95 border border-current p-3 justify-center sm:min-w-100 min-h-120">
            <h2 className="text-center text-2xl">Evolution</h2>
            {/* Here we will map out our evolutions here */}
            {/* <div className="flex flex-wrap justify-evenly"></div> */}
            <div>
                <img className="h-25 mx-auto" src="assets/133Eevee.png" alt="" />
                <p className="text-center">Eevee</p>
            </div>
            <img className="m-auto" src="/assets/DownArrow.svg" alt="Next evolution" />
            <div>
                <img className="h-25 mx-auto" src="assets/133Eevee.png" alt="" />
                <p className="text-center">Eevee</p>
            </div>
            <div>
                <img className="h-25 mx-auto" src="assets/133Eevee.png" alt="" />
                <p className="text-center">Eevee</p>
            </div>

        </section>
    )
}

export default DisplayEvolutions