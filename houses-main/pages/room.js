import React, {useEffect, useState} from 'react';
import {Admin, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import StyledTable from "../components/table/table";
import {Button} from "antd";
import axios from "axios";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import '../styles/css/bootstrap.min.css';

const columns = [
    {
        title: 'Nomi',
        dataIndex: 'Nomi',
        key: 'Nomi',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Oshhona',
        dataIndex: 'Oshhona',
        key: 'Oshhona',
    },
    {
        title: 'MehmonHona',
        dataIndex: 'MehmonHona',
        key: 'MehmonHona',
    },
    {
        title: 'Yotohona',
        dataIndex: 'Yotohona',
        key: 'Yotohona',
    },
    {
        title: 'Balkon',
        dataIndex: 'Balkon',
        key: 'Balkon',
    },
    {
        title: 'Kirish',
        dataIndex: 'Kirish',
        key: 'Kirish',
    },
    {
        title: 'Kvqiymadi',
        dataIndex: 'Kvqiymadi',
        key: 'Kvqiymadi',
    },
    {
        title: 'UmmumiyMaydon',
        dataIndex: 'UmmumiyMaydon',
        key: 'UmmumiyMaydon',
    },
    {
        title: 'Uyraqami',
        dataIndex: 'Uyraqami',
        key: 'Uyraqami',
    },
    {
        title: 'BinoRaqami',
        dataIndex: 'BinoRaqami',
        key: 'BinoRaqami',
    },
    {
        title: 'ObectNomi',
        dataIndex: 'ObectNomi',
        key: 'ObectNomi',
    },
    {
        title: 'Etaji',
        dataIndex: 'Etaji',
        key: 'Etaji',
    },
    {
        title: 'Kvnarhi',
        dataIndex: 'Kvnarhi',
        key: 'Kvnarhi',
    },
    {
        title: 'Tip',
        dataIndex: 'Tip',
        key: 'Tip',
    },
    {
        title: 'delete',
        dataIndex: 'del',
        key: 'del',
        render:() => {
            return(
                <Button type="danger">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    O'chirish
                </Button>
            )
        }
    },
    {
        title: 'edit',
        dataIndex: 'upd',
        key: 'upd',
        render:() => {
            return(
                <Button type="default">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    O'zgartirish
                </Button>
            )
        }
    },
];

function Debt() {
    const [index, setIndex] = useState(0)

    const [data, setData] = useState([]);

    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get("https://houses-adminpanel.herokuapp.com/api/honadon")
            .then(res => {
                setData(res.data.data);
            });
    })
    const handleDelete = () => {
        openModal();
    }

    return (
        <Admin>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "Qarzdorlar",
                        content: (
                            <StyledTable columns={columns} data={data}/>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <PlusCircleOutlined />,
                        onClick: () => handleDelete(),
                    },
                ]}
            />
            <Modal isOpen={modal}>
                <ModalHeader>
                    Uy qushish
                </ModalHeader>
                <ModalBody>
                    <Input className="mt-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <Input className="mt-2" id="Object" type="text" placeholder="Object"/>
                    <Input className="mt-2" id="Qavatliligi" type="text" placeholder="Qavatliligi"/>
                    <Input className="mt-2" id="PodezlarSoni" type="text" placeholder="PodezlarSoni"/>
                    <Input className="mt-2" id="HonalarSoni" type="text" placeholder="HonalarSoni"/>
                    <Input className="mt-2" id="Raqami" type="text" placeholder="Raqami"/>
                    <Input className="mt-2" id="UmmumiyKvadrati" type="text" placeholder="UmmumiyKvadrati"/>
                    <Input className="mt-2" id="Tip" type="text" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openModal}>Cancel</Button>
                    <Button color="success" >Save</Button>
                </ModalFooter>
            </Modal>

        </Admin>

    );
}

export default Debt;
