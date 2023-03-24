import { useQuery } from '@tanstack/react-query'
import { getCars } from '../../api/Cars/carsApi'
import './card.css'
import { CardPlaceholders } from './Placeholders/card_Placeholders'

export const Cardcars = () => {
    const { isLoading, data: cars, error, } = useQuery({
        queryKey: ['cars'],
        queryFn: getCars
    })

    if (isLoading) return <CardPlaceholders number_card={6} />
    if (error) return <div> <p className='text-danger'>error:{error.message}</p></div>


    return cars.map((cars) => {
        return <div key={cars.id} className='card mt-5 mb-5 me-3 ms-3' style={{ width: "18rem", cursor: "pointer" }}>
            <img src={cars.image_car} alt={cars.brand.brand} className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'>{cars.brand.brand}:{cars.model}-{cars.year.year}</h5>
                <p>{cars.guys.guys}</p>
                <hr />
                <p className='fs-4'>{cars.price}/USD</p>
            </div>
        </div>
    })

}