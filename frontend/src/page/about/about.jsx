import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import "../about/about.css"
import Headers from "../../Components/header/header"
import mission from "../../asset/IMG/mision.png"
import Valores from "../../asset/IMG/valores.png"
import { Footer } from '../../Components/footer/footer';
import { ScrollAnimation } from '../../hooks/useAnimateScroll';


const About = () => {
    ScrollAnimation(".text_mission", "right", "150px")
    ScrollAnimation(".text_values", "left", "500px")
    return (
        <>
                <Headers />

            <main className='container mb-5  about'>
                <section className='w-100'>
                    <div className='Our_story'>
                        <h2>Our story</h2>
                        <p>Что такое Lorem Ipsum?
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                    </div>

                    <div className='Mission'>
                        <h2 style={{ zIndex: "5" }} >Mission</h2>
                        <img src={mission} alt="mission" />
                        <div className='text_mission'>
                            <p>Что такое Lorem Ipsum?
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                        </div>
                    </div>

                    <div className='Our_values'>
                        <div>
                            <h2>Our Values</h2>
                            <p className='text_values'>Что такое Lorem Ipsum?
                                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
                        </div>

                        <img src={Valores} alt="valores" />
                    </div>
                </section>

            </main>

            <Footer />
        </>
    )
}

export default About