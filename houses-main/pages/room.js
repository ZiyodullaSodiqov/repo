import React, {useEffect, useState} from 'react';
import {Admin, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import StyledTable from "../components/table/table";
import {Button} from "antd";
import axios from "axios";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

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

function Uy() {
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

    const addUy = () => {
        let obj = {
            Nomi: byId("Nomi"),
            Oshhona : byId("Oshhona"),
            MehmonHona : byId("MehmonHona"),
            Yotohona : byId("Yotohona"),
            Balkon : byId("Balkon"),
            Kirish : byId("Kirish"),
            Kvqiymadi : byId("Kvqiymadi"),
            UmmumiyMaydon : byId("UmmumiyMaydon"),
            Uyraqami : byId("Uyraqami"),
            BinoRaqami : byId("BinoRaqami"),
            ObectNomi : byId("ObectNomi"),
            Etaji : byId("Etaji"),
            Kvnarhi : byId("Kvnarhi"),
            Tip : byId("Tip")
        }

        // const headers = {
        //     'Authorization': 'Bearer my-token',
        //     'My-Custom-Header': 'foobar'
        // };

        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
            "Access-Control-Max-Age": "3600",
            "Access-Control-Allow-Headers": "Access-Control-Allow-Methods,Access-Control-Allow-Origin,x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN",
            "Content-Type": 'application/json',
            'My-Custom-Header': 'foobar'
        }
        axios.post('https://houses-adminpanel.herokuapp.com/api/honadon', obj, { headers })
            .then(response => {
                setData(response.data.data);
                console.log("success")
            }).catch(err => {
            console.log(err.config.data)
        });
        }

    const byId = (id) => document.getElementById(id).value;

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
                    <Input className="mt-2" id="Oshhona" type="number" placeholder="Oshhona"/>
                    <Input className="mt-2" id="MehmonHona" type="number" placeholder="MehmonHona"/>
                    <Input className="mt-2" id="Yotohona" type="number" placeholder="Yotohona"/>
                    <Input className="mt-2" id="Balkon" type="number" placeholder="Balkon"/>
                    <Input className="mt-2" id="Kirish" type="text" placeholder="Kirish"/>
                    <Input className="mt-2" id="Kvqiymadi" type="number" placeholder="Kvqiymadi"/>
                    <Input className="mt-2" id="UmmumiyMaydon" type="number" placeholder="UmmumiyMaydon"/>
                    <Input className="mt-2" id="Uyraqami" type="number" placeholder="Uyraqami"/>
                    <Input className="mt-2" id="BinoRaqami" type="number" placeholder="BinoRaqami"/>
                    <Input className="mt-2" id="ObectNomi" type="text" placeholder="ObectNomi"/>
                    <Input className="mt-2" id="Etaji" type="number" placeholder="Etaji"/>
                    <Input className="mt-2" id="Kvnarhi" type="number" placeholder="Kvnarhi"/>
                    <Input className="mt-2" id="Tip" type="number" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openModal}>Cancel</Button>
                    <Button color="success" onClick={addUy}>Save</Button>
                </ModalFooter>
            </Modal>

        </Admin>

    );
}

export default Uy;
