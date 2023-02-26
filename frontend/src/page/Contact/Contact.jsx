import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "../Contact/Contact.css"
import { Footer } from '../../Components/footer/footer';
import Image_Contact from "../../asset/IMG/Contact.png"
import Headers from '../../Components/header/header';
export const Contact = () => {
    return (
        <>

            <Headers />


            <main className='container contact'>

                <div >
                    <h1>Contacts</h1>
                    <p style={{ textAlign: "justify" }} >Что такое Lorem Ipsum?
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.<p>Tel:<strong>849-41568-892</strong></p> </p>
                </div>
                <section className='d-flex'>
                    <img src={Image_Contact} alt="contact" width="600px" height="600px"></img>
                    <div className='form_Contact w-100'>

                        <form className='form-group p-3'>
                            <div className='d-flex'>
                                <input type='text' className='form-control m-3 ' name='email' placeholder='Email' />
                                <input type='text' className='form-control m-3' disabled value="Empresa@gamil.com" />
                            </div>
                            <textarea className='form-control p-2' placeholder='Text' />
                            <button type='submit' className='btn btn-primary mt-3 w-50'>Send</button>
                        </form>
                    </div>
                </section>

            </main>
            <Footer />

        </>
    )
}