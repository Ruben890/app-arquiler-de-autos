import { useQuery } from '@tanstack/react-query'
import { GetCarsPagination } from '../../api/Cars/carsApi'
import './card.css'
import { CardPlaceholders } from './Placeholders/card_Placeholders'
import { useState } from 'react'

export const Cardcars = () => {
    const [page, setPage] = useState(1);
    const { isLoading, data: cars, error } = useQuery(['car/', page], () => GetCarsPagination(page), {
        keepPreviousData: true,
        staleTime: 30000
    })

    if (isLoading) return <section className='Cars'> <CardPlaceholders number_card={10} /></section>
    if (error) return <div> <p className='text-danger'>error:{error.message}</p></div>


    return (
        <>
            <section className='Cars'>
                {cars.results.map((cars) => {
                    return <div key={cars.id} className='card_cars mt-5 mb-2 me-3 ms-3 rounded'>
                        <img src={cars.image_car} alt={cars.brand.brand} className='cars-img w-100 rounded-top ' height="200" width="250" style={{ objectFit: "cover" }} />
                        <div className='p-3'>
                            <h5 className='card-title'>{cars.brand.brand}:{cars.model}-{cars.year.year}</h5>
                            <p>{cars.guys.guys}</p>
                            <hr className=' w-70' />
                            <p className='fs-4'>{cars.price}/USD</p>
                        </div>
                    </div>
                })}
            </section>

            <div className='carsPagination'>
                {cars.previous == null ? <button disabled className='btn'>previous</button> : <button onClick={() => setPage(page - 1)} className='btn'>previous</button>}

                {cars.next == null ? <button className='btn' disabled >next</button> : <button onClick={() => setPage(page + 1)} className='btn'>next</button>}
            </div>


        </>
    )




}