import React, { useEffect, useContext } from "react";
import { TeamContext } from "../hooks/useTeam";
import { useHistory } from "react-router-dom";

const AboutUs = () => {
    const { getLocation } = useContext(TeamContext);
    const history = useHistory();
    useEffect(() => {
        getLocation(history.location.pathname);
    }, []);
    return (
        <div
            className="container d-flex flex-column justify-content-center text-center"
            style={{ width: "80%" }}
        >
            <h1>O нас</h1>
            <p>
                Компания ООО Системы Отображения Информации - официальный
                эксклюзивный дистрибьютор ( импортер ) корпораций SHARP / NEC,
                Optoma ( Coretronic Corp ) и компаний Projecta, Digis, Lumien,
                Wize в Беларуси.{" "}
            </p>
            <p style={{ fontSize: "3rem", color: "red", fontWeight: "bold" }}>
                Основные направления деятельности
            </p>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#919191",
                    fontWeight: "bold"
                }}
            >
                Поставка, внедрение, обслуживание и сопровождение
            </p>
            <div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p className="m">
                        Проекционного оборудования компаний Optoma, InFocus
                    </p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>
                        Мониторы для видеостен, интерактивное оборудование,
                        мониторы для Digital Signage компании Vestel
                    </p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>
                        Решения для презентаций, отображения информации,
                        видеостен, диспетчерских 24/7, учреждений образования и
                        многое другое
                    </p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>
                        Гарантийное и постгарантийное обслуживание поставленного
                        оборудования{" "}
                    </p>
                </div>
            </div>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#919191",
                    fontWeight: "bold"
                }}
            >
                Дистрибуция
            </p>
            <div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p className="m">
                        Проекционного оборудования и систем отображения
                        информации
                    </p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Работа с партнерами</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Работа с розничными точками</p>
                </div>
            </div>
            <p
                style={{
                    fontSize: "2rem",
                    color: "#919191",
                    fontWeight: "bold"
                }}
            >
                Наши статусы
            </p>
            <div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Официальный дистрибьютор (импртер) компании SHARP/NEC</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>Официальный дистрибьютор (импртер) компании OPTOMA</p>
                </div>
                <div className="d-flex align-items-baseline">
                    <img
                        src={
                            "https://byprint.by/wp-content/uploads/2021/06/ff489f49.jpg"
                        }
                        alt="images"
                        style={{ width: "1rem" }}
                    />
                    <p>
                        Официальный дистрибьютор (импртер) компании DIGIS,
                        PROJECTA
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
