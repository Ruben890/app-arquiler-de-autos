import { useQuery } from '@tanstack/react-query'
import { getCars } from '../../api/Cars/carsApi'
import './card.css'

export const Cardcars = () => {
    const { isLoading, data: cars, error, } = useQuery({
        queryKey: ['cars'],
        queryFn: getCars
    })

    if (isLoading) return <div> loading..</div>
    if (error) return <div> <p className='text-danger'>error:{error.message}</p></div>


    return cars.map(cars => {
        return <div className='card' style={{ width: "18rems" }}>
            <img src={cars.image_car} alt={cars.brand.brand} className='card-img-top' />
            <div className='card-body'>
                <h5 className='card-title'>{cars.brand.brand}:{cars.model}-{cars.year.year}</h5>
                <ul>
                    <li className='d-flex'><i class="bi bi-fuel-pump me-2" alt="fuel_cars"></i><p>{cars.Fuel}</p> </li>
                </ul>
            </div>
        </div>
    })

}