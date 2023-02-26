import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "../search/search.css"

export const Search = () => {
    return (
        <div className='container-fluid search'>
            <form className='justify-content-sm-center p-3' method='get'>
                <input type="search" placeholder="Search"/>
                <div className='options'>
                    <select className='btn_option'>
                        <option value="brand">Brand</option>
                    </select>
                    <select className='btn_option'>
                        <option value="year">Year</option>
                    </select>
                    <select className='btn_option'>
                        <option value="Model">Model</option>
                    </select>
                </div>
            </form>
        </div>
    )

}