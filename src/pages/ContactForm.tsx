import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonImg, IonPage, IonText, IonTextarea } from '@ionic/react';
import { personOutline, atCircleOutline, businessOutline } from 'ionicons/icons';
import LogoBackbone from "../assets/logo_backbone.png"

function ContactForm() {
    return (
        <IonPage className='container'>
            <IonContent fullscreen>
                <IonImg src={LogoBackbone} alt="Logo" className="flex justify-center items-center mx-auto mt-10 w-52" />
                <div className='flex justify-center'>
                    <IonText class='text-4xl font-bold'>BACK BONE</IonText>
                </div>

                <div className='flex flex-col mt-5'>
                    <IonText class='text-[30px] font-extrabold text-start' color={'tertiary'}>Contactanos</IonText>
                    <IonText class='text-[20px] text-start mt-2 mb-3 text-[#939DB5]'>Envíanos tu idea</IonText>
                </div>

                <form>
                    <IonItem className='mb-6 h-full' lines="none" color={"medium"}>
                        <IonInput type="text" placeholder="Nombre" required class='inputs'>
                            <IonIcon slot="end" icon={personOutline} aria-hidden="true" className='icon-input' />
                        </IonInput>
                    </IonItem>

                    <IonItem className='mb-6 h-full' lines="none" color={"medium"}>
                        <IonInput type="email" placeholder="Email" required class='inputs'></IonInput>
                        <IonIcon slot="end" icon={atCircleOutline} aria-hidden="true" className='icon-input' />
                    </IonItem>

                    <IonItem className='mb-6 h-full' lines="none" color={"medium"}>
                        <IonInput type="text" placeholder="Organización" required class='inputs'></IonInput>
                        <IonIcon slot="end" icon={businessOutline} aria-hidden="true" className='icon-input' />
                    </IonItem>

                    <IonItem className='mb-4' lines="none" color={"medium"}>
                        <IonTextarea rows={8} placeholder="Escribe tu mensaje aquí..." required class='input-textarea w-full'></IonTextarea>
                    </IonItem>

                    <IonButton expand="block" className="mt-4 mb-20 text-white button-send">Enviar</IonButton>
                </form>
            </IonContent>
        </IonPage>
    )
}

export default ContactForm