import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

import './Projects.css';

export const ProjectCard = ({ title, description, images, tags, link }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const modalImages = images.slice(1);

    return (
        <>
            {/* Project Grid Item  */}
            < Col xs={12} md={6} lg={6} xl={4} >
                <div className="proj-img-wrapper" onClick={() => setShowOverlay(true)}>
                    <div className="proj-img">
                        <img src={images[0]} />
                        <div className="proj-body">
                            <h4>{title}</h4>
                        </div>
                    </div>
                </div>
            </Col >
            {/* Fullscreen Modal Overlay  */}
            {
                showOverlay && (
                    <div className="custom-modal-overlay" onClick={() => setShowOverlay(false)}>
                        <div
                            className="custom-modal-content"
                            onClick={(e) => e.stopPropagation()} // prevent close on modal content click
                        >
                            <button className="close-btn" onClick={() => setShowOverlay(false)}>×</button>
                            <h2>{title}</h2>
                            {description && (
                                <p>{description}</p>
                            )
                            }
                            <div className="tag-link-row">
                                {tags && tags.length > 0 && (
                                    <div className="modal-tags">
                                        {tags.map((tag, index) => (
                                            <span className="tag-pill" key={index}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {link ? (
                                    link !== "NDA" ? (
                                        <a
                                            href={link}
                                            className="modal-link"
                                        >
                                            View Project 🔗
                                        </a>
                                    ) : (
                                        <span className="modal-link nda">Under NDA and IP 🔒</span>
                                    )) : null}
                            </div>
                            <div className={`modal-image-gallery ${modalImages.length === 2 ? "two-images" : ""}`}>
                                {modalImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${title} ${index + 1}`}
                                        className="modal-img" />
                                ))}
                            </div>
                            {/* Add more content here if you want */}
                        </div>
                    </div>
                )
            }
        </>
    );
}