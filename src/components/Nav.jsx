import React from 'react'

export default function Nav() {
    return(
        <>
            <section className="bg-orange-500 h-16 w-full flex items-center justify-center px-5 shadow-lg gap-5">
                <h1 className="text-white text-3xl">Pizzaio | admin</h1>
            </section>
            <section className='bg-yellow-300 h-8 w-full flex items-center justify-center px-5 shadow-lg gap-5'>
                <a href='/createpizza'>Create</a>
            </section>
        </>
    )
}