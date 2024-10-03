import { IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import Porfolio_1 from "../assets/portfolio_1.svg"
import Porfolio_2 from "../assets/portfolio_2.svg"
import Porfolio_3 from "../assets/portfolio_3.svg"
import Porfolio_4 from "../assets/portfolio_4.svg"

function Portfolio() {
    return (
        <IonPage className='container'>
            <IonContent fullscreen>
                <div className='flex flex-col'>
                    <IonText class='text-[25px] font-extrabold text-start' color={'tertiary'}>Portafolio</IonText>
                    <IonText class='text-[17px] text-start mt-2 mb-5 text-[#939DB5]'>Trabajos anteriores y casos de éxito</IonText>
                </div>

                <IonImg src={Porfolio_1} alt="Trabajo 1" className="mb-6" />
                <IonImg src={Porfolio_2} alt="Trabajo 2" className="mb-6" />
                <IonImg src={Porfolio_3} alt="Trabajo 3" className="mb-6" />
                <IonImg src={Porfolio_4} alt="Trabajo 3" className="mb-12" />
            </IonContent>
        </IonPage>
    )
}

export default Portfolio 