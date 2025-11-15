import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Quitamos OwlCarousel porque NO existe y causa error
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const HeroSlider = () => {
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

                                            {/* Botón + Video */}
                                            <div
                                                className="slider-btn d-flex align-items-center gap-4 mt-4"
                                                style={{ flexWrap: 'wrap' }}
                                            >
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

                                                {/* VIDEO CON MINIATURA */}
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
                                                    onClick={(e) => {
                                                        const video =
                                                            e.currentTarget.querySelector('video');
                                                        if (video.paused) {
                                                            video.play();
                                                        } else {
                                                            video.pause();
                                                        }
                                                    }}
                                                >
                                                    <video
                                                        src="/uploads/video-invitacion.mp4"
                                                        poster="/uploads/thumbnail-hrweek.png"
                                                        className="w-100 h-100"
                                                        style={{
                                                            objectFit: 'cover',
                                                            width: '100%',
                                                            height: '100%',
                                                        }}
                                                        preload="metadata"
                                                    />

                                                    {/* Overlay que aparece hasta que reproducen */}
                                                    <div
                                                        className="play-overlay"
                                                        style={{
                                                            position: 'absolute',
                                                            inset: 0,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            backgroundColor:
                                                                'rgba(0, 0, 0, 0.3)',
                                                            color: '#fff',
                                                            fontSize: '18px',
                                                            opacity: 1,
                                                            transition: 'opacity .3s',
                                                            pointerEvents: 'none',
                                                        }}
                                                    >
                                                        ▶ Haz clic para reproducir
                                                    </div>
                                                </div>
                                            </div>
                                            {/* FIN VIDEO */}
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
