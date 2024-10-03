import React from 'react'
import { IonContent, IonHeader, IonImg, IonPage, IonText } from '@ionic/react';
import Worker_1 from "../assets/worker_1.svg";
import Worker_2 from "../assets/worker_2.svg";
import Worker_3 from "../assets/worker_3.svg";
import Worker_4 from "../assets/worker_4.svg";
import Worker_5 from "../assets/worker_5.svg";

function Teamwork() {
    return (
        <IonPage className='w-full h-[100vh] '>
            <IonContent fullscreen>
                <div className='flex flex-col pl-[30px] pr-[30px] pt-[30px]'>
                    <IonText class='text-[25px] font-extrabold text-start' color={'tertiary'}>Equipo</IonText>
                    <IonText class='text-[17px] text-start mt-2 text-[#939DB5]'>Conoce a los miembros</IonText>
                </div>

                <div className='grid grid-cols-2 gap-4 pl-[30px] pr-[30px] mb-6 mt-3'>
                    <IonImg src={Worker_1} alt="Trabajador 1" className="worker-img"/>
                    <IonImg src={Worker_2} alt="Trabajador 2" className="worker-img"/>
                    <IonImg src={Worker_3} alt="Trabajador 3" className="worker-img"/>
                    <IonImg src={Worker_4} alt="Trabajador 4" className="worker-img"/>
                    <IonImg src={Worker_5} alt="Trabajador 5" className="worker-img"/>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Teamwork