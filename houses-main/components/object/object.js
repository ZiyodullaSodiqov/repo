import StyledTable from "../table/table";
import {Button} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {toast} from "react-toastify";

const columns = [
    {
        title: 'Nomi',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Ummumiy',
        dataIndex: 'Ummumiy',
        key: 'Ummumiy',
    },
    {
        title: 'Bino',
        dataIndex: 'Bino',
        key: 'Bino',
    },
    {
        title: 'Qurilishni Boshlanish Sanasi',
        dataIndex: 'QurilishniBoshlanishSanasi',
        key: 'QurilishniBoshlanishSanasi',
    },
    {
        title: 'Qurilishni Bitish Sanasi',
        dataIndex: 'QurilishniBitishSanasi',
        key: 'rooms',
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

function ObjectPage() {

    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get("https://houses-adminpanel.herokuapp.com/api/object")
            .then(res => {
                setData(res.data.data);
            });
    });

    const addObj = () => {
        let obj = {
            Name: document.getElementById("Nomi").value,
            Ummumy: document.getElementById("Ummumy").value,
            Bino: document.getElementById("Bino").value,
            QurilishniBoshlanishSanasi: document.getElementById("QurilishniBoshlanishSanasi").value,
            QurilishniBitirishSanasi: document.getElementById("QurilishniBitirishSanasi").value,
            Tip: document.getElementById("Tip").value
        }

        axios.post("https://houses-adminpanel.herokuapp.com/api/object", obj)
            .then(() => {
                toast.success("successfully saved object");
                console.log("success")
            }).catch(() => {
            console.log("error");
            toast.error("error");
        })
        openModal();
        toast.success("successfully saved object");

    }

    return (
        <div>
            <Button onClick={openModal} style={{
                height:"40px",
                borderRadius:"50%"
            }}>+</Button>
            <StyledTable columns={columns} data={data}/>
            <Modal isOpen={modal}>
                <ModalHeader>
                    Object qushish
                </ModalHeader>
                <ModalBody>
                    <Input className="mt-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <Input className="mt-2" id="Ummumy" type="text" placeholder="Ummumy"/>
                    <Input className="mt-2" id="Bino" type="text" placeholder="Bino"/>
                    <Input className="mt-2" id="QurilishniBoshlanishSanasi" type="date"
                           placeholder="Qurilishni Boshlanish Sanasi"/>
                    <Input className="mt-2" id="QurilishniBitirishSanasi" type="date"
                           placeholder="QurilishniBitirishSanasi"/>
                    <Input className="mt-2" id="Tip" type="number" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openModal}>Cancel</Button>
                    <Button color="success" onClick={addObj}>Save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ObjectPage;
