import React, {useEffect, useState} from 'react';
import {Admin, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import {Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row, Table} from "reactstrap";
import axios from "axios";
import {Url} from "../components/api";
import {jsPDF} from "jspdf";


function Debt() {
    const [index, setIndex] = useState(0);
    const [modal, setModal] = useState(false);
    const [info, setInfo] = useState(false);
    const [contract, setContract] = useState([]);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    let obj = {};
    let pdf = "";

    const toggle = () => setModal(!modal);
    const openInfo = () => setInfo(!info);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    useEffect(() => {
        getContract();
    }, []);

    function getContract() {
        axios.get(Url + "/all")
            .then(res => {
                setContract(res.data.data);
            });
    }

    const byId = (id) => document.getElementById(id).value;

    const save = () => {
        obj = {
            number: byId("number"),
            investor_passport_seriya: byId("investor_passport_seriya"),
            passport_region: byId("passport_region"),
            passport_date: byId("passport_date"),
            investor_name: byId("investor_name"),
            investor_lastname: byId("investor_lastname"),
            investor_otasini_ismi: byId("investor_otasini_ismi"),
            uy_address: byId("uy_address"),
            qavati: byId("qavati"),
            uy_maydoni: byId("uy_maydoni"),
            xona_soni: byId("xona_soni"),
            kv_raqami: byId("kv_raqami"),
            total_price: byId("total_price"),
            qolgan_price: byId("qolgan_price"),
            investor_address: byId("investor_address"),
            investor_first_phone: byId("investor_first_phone"),
            investor_two_phone: byId("investor_two_phone"),
            birthday: byId("birthday"),
            investor_jshr: byId("investor_jshr"),
            quruchi_shoti_raqami: byId("quruchi_shoti_raqami"),
        }
    }

    const x = () => {
        pdf = {
            pdf:
                `Uy-joy qurilishiga investisiya kiritish haqida
№ 1/3-50- sonli ShARTNOMA

Toshkent shahri                             “___” _________ 2022 yil

Pasport seriyasi AA№ 2624478    Camarqand viloyati Qo‘shrabod tumani IIB  tomonidan 18.08.2013 berilgan O‘zbekiston Respublikasi fuqarosi Tashnazarov Uktam Baxtiyor o‘g‘li (keyingi o‘rinlarda – “Investor”) bir tomondan va “O‘zshahar qurilish invest” injiniring kompaniyasi MChJ nomidan 2022 yil 5 yanvardagi 01/02-sonli ishonchnoma asosida faoliyat yurituvchi direktor o‘rinbosari J.B.Jabborov (keyingi o‘rinlarda  – “Uy-joy quruvchi”) ikkinchi tomondan, birgalikda “Tomonlar” deb nomlanuvchilar mazkur shartnomani quyidagilar haqida tuzdilar:

1.  ASOSIY TUShUNChALAR

1.2.  Ushbu shartnoma matnining keyingi o‘rinlarida uchraydigan barcha atamalar, agar kontekstdan boshqacha ma'no anglanmasa, quyidagi bo‘limda bayon qilingan tushunchalarni anglatadi:
“Uy-joy majmuasi” – Qonun hujjatlarida belgilangan tartibda zamonaviy qurilish materiallari va texnologiyalarini respublika mintaqalarining tabiiy-iqlim sharoitlarini va joyning rel'efini, ijtimoiy-demografik xususiyatlarini hisobga olgan holda ishlab chiqilgan loyiha-smeta hujjatlariga asosan ma'lum bir hududda, barcha qurilish me'yorlariga mos ravishda, foydalanishga tayyor holatda, atrofida obodonlashtirish va muhandislik- kommunikasiya tarmoqlari bilan birgalikda qurilgan ikki yoki undan ortiq ko‘p qavatli uy-joylar majmuasi;
“Investor” - “Uy-joy majmuasi”dagi ko‘p qavatli uy-joylardan mazkur shartnomaga asosan unga ajratilgan xonadonni “Uy-joy quruvchi” tomonidan keyinchalik unga mulk huquqi asosida topshirilishi sharti bilan “Uy-joy majmuasi” qurilishiga ma'lum miqdordagi pul mablag‘i ko‘rinishida investisiya kirituvchi jismoniiy shaxs;
“Uy-joy quruvchi” - “Uy-joy majmuasi” qurilishi uchun barcha zarur hujjatlar, xususan loyiha-smeta hujjatlarini rasmiylashtirish, pudratchilarni tanlash, qurilish ishlarining o‘z vaqtida va sifatli bajarilishi yuzasidan texnik nazoratni amalga oshirish, “Uy-joy majmuasi”ni o‘z muddatida foydalanishga topshirish, shuningdek “Investor” mablag‘laridan maqsadli va samarali foydalanilishi funksiyalari yuklangan holda “O‘zshahar qurilish invest” injiniring kompaniyasi MChJ;
“Kvartira” – “Uy-joy majmuasi” qurilishi yakunlanib, foydalanishga topshirilgandan so‘ng o‘ziga yuklatilgan barcha majburiyatlarni o‘z muddatida va to‘liq bajargan “Investor”ga mulk huquqi asosida topshiriladigan ko‘chmas mulk ob'ekti;
      
2.  MUHIM ShARTLAR
  
2.2.  Ushbu shartnoma bo‘yicha munosabatlar O‘zbekiston Respublikasi Fuqarolik kodeksi, O‘zbekiston Respublikasi Prezidentining 28.11.2019 yildagi PF-5886-son, 11.03.2021 yildagi       PF-6186-sonli hamda 2021 yil 9 dekabrdagi PF-33-sonli Farmonlari bilan o‘rnatilgan yangi tartib va boshqa qonun hujjatlari asosida tartibga solinadi.

3.  ShARTNOMA PREDMETI

3.2.  “Investor” “Uy-joy quruvchi”ning roziligi va mazkur shartnoma shartlariga muvofiq, Toshkent shahar, Yangihayot tumani, Yangidarhon MFY, Navro‘z ko‘chasida qurilayotgan “Uy-joy majmuasi”dagi (keyingi o‘rinlarda “Uy-joy majmuasi”) ko‘p qavatli uy-joylardan unga ajratilgan xonadonni “Uy-joy quruvchi” tomonidan keyinchalik mulk huquqi asosida topshirilishi sharti bilan “Uy-joy majmuasi” qurilishiga ma'lum miqdordagi pul mablag‘i ko‘rinishida investisiya kiritadi.
3.3.  “Uy-joy quruvchi” “Investor”ning “Uy-joy majmuasi” qurilishi uchun investisiya kiritishiga rozilik berib, “Uy-joy majmuasi”dagi 1/3-sonli ko‘p qavatli uyning, 11-qavat, maydoni (shartli ravishda) 70.00 m2 dan iborat, 3-xonali 50-kvartirasini (keyingi o‘rinlarda “Kvartira”) kiritilgan investisiya mablag‘i evaziga unga ajratib, “Uy-joy majmuasi” belgilangan tartibda foydalanishga topshirilgandan so‘ng notarial shartnoma tuzish orqali mulk huquqi asosida unga topshiradi.
3.4.  Kvartira maydoni loyihaga asosan shartli bo‘lib, kadastr hujjatlariga muvofiq kvartira maydoni o‘zgarishi kvartira qiymatiga ta'sir etmaydi

4. TOMONLARNING HUQUQ VA MAJBURIYaTLARI
4.1.  “Investor”ning majburiyatlari:
4.1.1. Mazkur shartnomada ko‘rsatilgan miqdorda va shartlarda o‘z mablag‘lari va yoki jalb etilgan mablag‘larni “Uy-joy majmuasi” qurilishiga ushbu shartnomada belgilangan tartibda yo‘naltirish. 
4.1.2. Mazkur shartnoma bo‘yicha o‘z zimmasiga olgan majburiyatlar bajarilishiga aloqador to‘lov va boshqa hujjatlar nusxalarini “Buyurtmachi”ga taqdim etish.
4.1.3. “Kvartira”ni “Uy-joy quruvchi”dan mazkur shartnomaga muvofiq topshirish-qabul qilish dalolatnomasi bo‘yicha qabul qilib olish.
4.1.4. Zarurat tug‘ilganda uy-joy quruvchining talabi bilan investorning mablag‘lari, tijorat banklarining kredit mablag‘lar va qonunda taqiqlanmagan  boshqa mablag‘lar hisobidan ulush kiritish asosida qurilishga mablag‘lar yo‘naltirish
4.1.5 Uy-joy quruvchi mas'ul  hodimlari tomonilan uy-joydagi qurilish ishlari yakunlanib kvartira foydalanishga tayyor holga keltirilganligi haqida xabar berilgandan so‘ng 1 oy muddatda kvartira oldi-sotdisi bo‘yicha notarial idorada shartnomani rasmiylashtirish, kvartira qiymatining qolgan qismini o‘z mablag‘lari, tijorat banklarining ipoteka kreditlari va boshqa qonun bilan taqiqlanmagan manbalar hisobidan to‘lash.
4.2. Investorning huquqlari:
4.2.1. Qurilishning b`
        }
    }

    const addContract = () => {
        save();
        x();
        let p = pdf.pdf;
        const doc = new jsPDF();
        doc.text(p, 10, 10);
        doc.save("Shartnoma.pdf");
        console.log(p)

        // axios.post(Url + "/add", obj)
        //     .then(() => {
        //         toast.success("Shartnoma muaffaqiyatli qushildi!");
        //     }).catch(err => {
        //     toast.error(err);
        // });
    }


    return (
        <div>
            <Admin>
                <Tabs
                    index={index}
                    setIndex={setIndex}
                    tabs={[
                        {
                            title: "Shartnoma",
                            content: (
                                <div>
                                    Shartnoma
                                    <div>
                                        <Table bordered>
                                            <thead>
                                            <tr>
                                                <th>T/r</th>
                                                <th>Number</th>
                                                <th>passport seriya</th>
                                                <th>passport region</th>
                                                <th>passport date</th>
                                                <th>name</th>
                                                <th>lastname</th>
                                                <th>otasini ismi</th>
                                                <th>uy address</th>
                                                <th colSpan="3">Action</th>
                                            </tr>
                                            </thead>
                                            {contract &&
                                                contract.map((item, i) =>
                                                    <tbody key={i}>
                                                    <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{item.number}</td>
                                                        <td>{item.investor_passport_seriya}</td>
                                                        <td>{item.passport_region}</td>
                                                        <td>{item.passport_date}</td>
                                                        <td>{item.investor_name}</td>
                                                        <td>{item.investor_lastname}</td>
                                                        <td>{item.investor_otasini_ismi}</td>
                                                        <td>{item.uy_address}</td>
                                                        <td><Button color="success" outline onClick={() => {
                                                            openInfo();
                                                            setContract(item);
                                                        }}>Info</Button></td>
                                                        <td><Button color="warning" outline onClick={() => {
                                                            openEditModal();
                                                            setContract(item);
                                                        }}>edit</Button></td>
                                                        <td><Button color="success" outline onClick={() => {
                                                            openDeleteModal();
                                                            setContract(item);
                                                        }}>delete</Button></td>
                                                    </tr>
                                                    </tbody>
                                                )
                                            }
                                        </Table>
                                    </div>
                                </div>
                            ),
                        },
                    ]}
                    tabRightContent={[
                        {
                            icon: <PlusCircleOutlined/>,
                            onClick: () => toggle(),
                        },
                    ]}
                />
            </Admin>
            <Modal size="xl" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Shartnoma qo'shish</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <Input placeholder="number" id="number" type="number"/>
                            <Input className="mt-4" placeholder="passport seriya" id="investor_passport_seriya"/>
                            <Input className="mt-4" placeholder="passport region" id="passport_region"/>
                            <Input className="mt-4" placeholder="passport date" id="passport_date"/>
                            <Input className="mt-4" placeholder="name" id="investor_name"/>
                            <Input className="mt-4" placeholder="lastname" id="investor_lastname"/>
                            <Input className="mt-4" placeholder="otasini ismi" id="investor_otasini_ismi"/>
                            <Input className="mt-4" placeholder="uy address" id="uy_address"/>
                            <Input className="mt-4" placeholder="qavati" id="qavati"/>
                            <Input className="mt-4" placeholder="uy maydoni" id="uy_maydoni"/>
                        </Col>
                        <Col>
                            <Input placeholder="xona soni" id="xona_soni" type="number"/>
                            <Input className="mt-4" placeholder="kv raqami" id="kv_raqami" type="number"/>
                            <Input className="mt-4" placeholder="total price" id="total_price"/>
                            <Input className="mt-4" placeholder="qolgan price" id="qolgan_price"/>
                            <Input className="mt-4" placeholder="investor address" id="investor_address"/>
                            <Input className="mt-4" placeholder="first phone" id="investor_first_phone"/>
                            <Input className="mt-4" placeholder="two phone" id="investor_two_phone"/>
                            <Input className="mt-4" placeholder="birthday" id="birthday"/>
                            <Input className="mt-4" placeholder="investor jshr" id="investor_jshr"/>
                            <Input className="mt-4" placeholder="quruchi shoti raqami" id="quruchi_shoti_raqami"/>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button outline onClick={toggle}>Cancel</Button>
                    <Button outline color="success" onClick={addContract}>Save</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={false} toggle={openInfo}>
                <ModalHeader toggle={openInfo}>Info</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="success" outline>OK</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Debt;
