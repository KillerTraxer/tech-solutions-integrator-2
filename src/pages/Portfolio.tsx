import { IonContent, IonImg, IonPage, IonText } from '@ionic/react';
import Porfolio_1 from "../assets/portfolio_1.svg"
import Porfolio_2 from "../assets/portfolio_2.svg"
import Porfolio_3 from "../assets/portfolio_3.svg"
import Porfolio_4 from "../assets/portfolio_4.svg"
import LogoBackbone from "../assets/logo_backbone.png"


function Portfolio() {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonImg src={LogoBackbone} alt="Logo" className="flex justify-center items-center mx-auto mt-10 w-52" />
                <div className='flex justify-center'>
                    <IonText class='text-4xl font-bold'>BACK BONE</IonText>
                </div>


                <div className='flex flex-col mt-10 pl-[30px] pr-[30px]'>
                    <IonText class='text-[30px] font-extrabold text-start' color={'tertiary'}>Portafolio</IonText>
                    <IonText class='text-[20px] text-start mt-2 mb-5 text-[#939DB5]'>Trabajos anteriores y casos de éxito</IonText>
                </div>

                <div className='flex flex-row justify-center gap-20'>
                    <IonImg src={Porfolio_1} alt="Trabajo 1" className="mb-6 w-[30rem]" />
                    <IonImg src={Porfolio_2} alt="Trabajo 2" className="mb-6 w-[30rem]" />
                </div>

                <div className='flex flex-row justify-center gap-20'>
                    <IonImg src={Porfolio_3} alt="Trabajo 3" className="mb-6 w-[30rem]" />
                    <IonImg src={Porfolio_4} alt="Trabajo 3" className="mb-12 w-[30rem]" />
                </div>

            </IonContent>
        </IonPage>
    )
}

export default Portfolio 