import { useEffect, useRef, useState } from 'react'
import { IonContent, IonPage, IonText, IonImg } from '@ionic/react';
import LogoBackbone from "../assets/logo_backbone.png"
import Servicio_1 from "../assets/Servicio_1.svg"
import Servicio_2 from "../assets/Servicio_2.svg"
import Servicio_3 from "../assets/Servicio_3.svg"
import Servicio_4 from "../assets/Servicio_4.svg"
import Testimony_1 from "../assets/testimony_1.svg"
import Testimony_2 from "../assets/testimony_2.svg"
import Testimony_3 from "../assets/testimony_3.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import SwiperCore from 'swiper'

function Home() {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');
    const swiperRef = useRef<SwiperCore>();

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        setTheme(prefersDark.matches ? 'dark' : 'light');

        const listener = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
        };

        prefersDark.addEventListener('change', listener);

        return () => prefersDark.removeEventListener('change', listener);
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
            console.log('correct')
        }
    }, [swiperRef.current]);

    return (
        <IonPage>
            <IonContent fullscreen>

                <IonImg src={LogoBackbone} alt="Logo" className="flex justify-center items-center mx-auto mt-10 w-52" />
                <div className='flex justify-center'>
                    <IonText class='text-4xl font-bold'>BACK BONE</IonText>
                </div>

                <div className='flex flex-col pl-[30px] pr-[30px] pt-[30px]'>
                    <IonText class='text-[30px] font-extrabold text-start' color={'tertiary'}>Servicios</IonText>
                    <IonText class='text-[20px] text-start mt-1 text-[#939DB5] mb-8'>Especialidades</IonText>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={120}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={2500}
                    modules={[Autoplay]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className='pl-4'
                >
                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_1} alt="Servicio 1" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_2} alt="Servicio 2" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_3} alt="Servicio 3" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_4} alt="Servicio 4" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_1} alt="Servicio 1" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_2} alt="Servicio 2" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_3} alt="Servicio 3" className="w-64" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_4} alt="Servicio 4" className="w-64" />
                    </SwiperSlide>
                </Swiper>

                <div className='flex flex-col mt-10 pl-[30px] pr-[30px]'>
                    <IonText class='text-[30px] font-extrabold text-start' color={'tertiary'}>Testimonios</IonText>
                    <IonText class='text-[20px] text-start mt-1 mb-3 text-[#939DB5]'>Clientes satisfechos</IonText>
                </div>

                <div className='flex flex-row justify-center'>
                    <IonImg src={Testimony_1} alt="Testimonio 1" className="mb-6 pl-[28px] pr-[28px] w-2/5" />
                    <IonImg src={Testimony_2} alt="Testimonio 2" className="mb-6 pl-[28px] pr-[28px] w-2/5" />
                </div>

                <IonImg src={Testimony_3} alt="Testimonio 3" className="mb-12 pl-[28px] pr-[28px] w-2/5 mx-auto" />

            </IonContent>
        </IonPage>
    );
}

export default Home
