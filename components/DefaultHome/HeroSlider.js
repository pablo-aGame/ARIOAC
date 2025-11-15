import React, { useState, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// ModalVideo queda cargado por si lo requieres después
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const HeroSlider = () => {

    // Control del video
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;

        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <React.Fragment>
            <div className="hero-slider-area">

                <div className="slider-item slider-item-bg-2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-9">
                                        <div className="slider-text two">

                                            <h2
                                                style={{
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    fontWeight: 400,
                                                    color: '#fff',
                                                    marginBottom: '20px',
                                                }}
                                            >
                                                SEMANA DE CELEBRACIÓN DEL PROFESIONAL DEL
                                            </h2>

                                            <p
                                                style={{
                                                    border: '5px solid #00BFFF',
                                                    width: '60%',
                                                    textAlign: 'center',
                                                    fontSize: '35px',
                                                    fontWeight: 700,
                                                    fontFamily: 'Montserrat, sans-serif',
                                                    letterSpacing: '1px',
                                                    lineHeight: '60px',
                                                }}
                                            >
                                                CAPITAL HUMANO
                                            </p>

                                            {/* BOTONES */}
                                            <div
                                                className="slider-btn d-flex align-items-center gap-4 mt-4"
                                                style={{ flexWrap: 'wrap' }}
                                            >
                                                {/* BOTÓN DE REGISTRO */}
                                                <Link
                                                    href="https://share.hsforms.com/1HupIgxJyRuK3lu6qDPtB7gq5t92"
                                                    target="_blank"
                                                    alt="formulario"
                                                    legacyBehavior
                                                >
                                                    <Link className="default-btn">
                                                        ¡REGÍSTRATE!
                                                    </Link>
                                                </Link>

                                                {/* VIDEO NUEVO CON MINIATURA Y BOTÓN PLAY */}
                                                <div
                                                    className="video-container"
                                                    style={{
                                                        position: 'relative',
                                                        width: '320px',
                                                        height: '180px',
                                                        borderRadius: '10px',
                                                        overflow: 'hidden',
                                                        boxShadow:
                                                            '0 4px 15px rgba(0, 0, 0, 0.4)',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={togglePlay}
                                                >
                                                    <video
                                                        ref={videoRef}
                                                        src="/uploads/video-invitacion.mp4"
                                                        className="w-100 h-100"
                                                        style={{
                                                            objectFit: 'cover',
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        preload="metadata"
                                                    />

                                                    {/* ÍCONO PLAY / PAUSE */}
                                                    {!isPlaying && (
                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                inset: 0,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                background:
                                                                    'rgba(0, 0, 0, 0.25)',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    width: '65px',
                                                                    height: '65px',
                                                                    borderRadius: '50%',
                                                                    background: 'rgba(0,0,0,0.6)',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    color: 'white',
                                                                    fontSize: '28px',
                                                                    fontWeight: 'bold',
                                                                }}
                                                            >
                                                                ▶
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                            {/* FIN BOTONES */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default HeroSlider;
