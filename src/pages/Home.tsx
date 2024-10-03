import { useEffect, useRef, useState } from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar, IonText, IonImg } from '@ionic/react';
import LogoDark from "../assets/LOGO_DARK.svg"
import LogoLight from "../assets/LOGO_LIGHT.svg"
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

    console.log(theme)

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
            console.log('correct')
        }
    }, []);

    return (
        <IonPage>
            <IonContent fullscreen>

                <div className='flex flex-col pl-[30px] pr-[30px] pt-[30px]'>
                    <IonText class='text-[25px] font-extrabold text-start' color={'tertiary'}>Servicios</IonText>
                    <IonText class='text-[17px] text-start mt-1 text-[#939DB5]'>Especialidades</IonText>
                </div>

                <Swiper
                    slidesPerView={2.3}
                    
                    spaceBetween={30}
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
                        <IonImg src={Servicio_1} alt="Servicio 1" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_2} alt="Servicio 2" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_3} alt="Servicio 3" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_4} alt="Servicio 4" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_1} alt="Servicio 1" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_2} alt="Servicio 2" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_3} alt="Servicio 3" className="service-image" />
                    </SwiperSlide>

                    <SwiperSlide style={{ padding: 0, margin: 0, width: "full" }}>
                        <IonImg src={Servicio_4} alt="Servicio 4" className="service-image" />
                    </SwiperSlide>
                </Swiper>

                <div className='flex flex-col mt-3 pl-[30px] pr-[30px]'>
                    <IonText class='text-[25px] font-extrabold text-start' color={'tertiary'}>Testimonios</IonText>
                    <IonText class='text-[17px] text-start mt-1 mb-3 text-[#939DB5]'>Clientes satisfechos</IonText>
                </div>

                <IonImg src={Testimony_1} alt="Testimonio 1" className="mb-6 pl-[28px] pr-[28px]" />
                <IonImg src={Testimony_2} alt="Testimonio 2" className="mb-6 pl-[28px] pr-[28px]" />
                <IonImg src={Testimony_3} alt="Testimonio 3" className="mb-12 pl-[28px] pr-[28px]" />

            </IonContent>
        </IonPage>
    );
}

export default Home