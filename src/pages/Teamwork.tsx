import { IonContent, IonHeader, IonImg, IonPage, IonText } from '@ionic/react';
import Worker_1 from "../assets/worker_1.svg";
import Worker_2 from "../assets/worker_2.svg";
import Worker_3 from "../assets/worker_3.svg";
import Worker_4 from "../assets/worker_4.svg";
import Worker_5 from "../assets/worker_5.svg";
import LogoBackbone from "../assets/logo_backbone.png"

function Teamwork() {
    return (
        <IonPage className='w-full h-[100vh] '>
            <IonContent fullscreen>
                <IonImg src={LogoBackbone} alt="Logo" className="flex justify-center items-center mx-auto mt-10 w-52" />
                <div className='flex justify-center'>
                    <IonText class='text-4xl font-bold'>BACK BONE</IonText>
                </div>

                <div className='flex flex-col pl-[30px] pr-[30px] pt-[30px]'>
                    <IonText class='text-[30px] font-extrabold text-start' color={'tertiary'}>Equipo</IonText>
                    <IonText class='text-[20px] text-start mt-2 text-[#939DB5]'>Conoce a los miembros</IonText>
                </div>

                <div className='flex flex-row justify-center gap-20'>
                    <IonImg src={Worker_1} alt="Trabajador 1" class='w-[20%]' />
                    <IonImg src={Worker_2} alt="Trabajador 2" class='w-[20%]' />
                </div>

                <div className='flex flex-row justify-center gap-20 mt-10'>
                    <IonImg src={Worker_3} alt="Trabajador 3" className="w-[20%]" />
                    <IonImg src={Worker_4} alt="Trabajador 4" className="w-[20%]" />
                </div>

                <div className='flex flex-row justify-center gap-20 mt-10 mb-20'>
                    <IonImg src={Worker_5} alt="Trabajador 5" className="w-[20%]" />
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Teamwork