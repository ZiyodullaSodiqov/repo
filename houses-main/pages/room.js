import React, {useEffect, useState} from 'react';
import {Admin, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";
import {Button} from "antd";
import axios from "axios";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {toast} from "react-toastify";
import {Url} from "../components/api";

function Uy() {
    const [index, setIndex] = useState(0)
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [honadon, setHonadon] = useState("")
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const openModal = () => setModal(!modal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);

    useEffect(() => {
        getHonadon();
    }, []);

    const byId = (id) => document.getElementById(id).value;

    let obj = () => {
        return {
            Nomi: byId("Nomi"),
            Oshhona: byId("Oshhona"),
            MehmonHona: byId("MehmonHona"),
            Yotohona: byId("Yotohona"),
            Balkon: byId("Balkon"),
            Kirish: byId("Kirish"),
            Kvqiymadi: byId("Kvqiymadi"),
            UmmumiyMaydon: byId("UmmumiyMaydon"),
            Uyraqami: byId("Uyraqami"),
            BinoRaqami: byId("BinoRaqami"),
            ObectNomi: byId("ObectNomi"),
            Etaji: byId("Etaji"),
            Kvnarhi: byId("Kvnarhi"),
            Tip: byId("Tip"),
            // Statuslar: "null",
        }
    }

    const getHonadon = () => {
        axios.get(Url + "/honadon")
            .then(res => {
                setData(res.data.data);
            });
    }

    const addHonadon = () => {
        console.log(obj());
        axios.post(Url + '/honadon', obj)
            .then(() => {
                toast.success("successfully saved Honadon");
            }).catch(err => {
            toast.error("error: " + err);
        });
    }

    function editHonadon() {
        axios.put(Url + '/honadon/update/' + honadon._id, obj)
            .then(() => {
                toast.success("successfully edit Honadon");
            }).catch(err => {
            toast.error("error: " + err);
        });
    }

    function deleteHonadon() {
        axios.delete(Url + "/honadon/delete/" + honadon._id)
            .then(() => {
                toast.success("successfully delete Honadon");
            }).catch(err => {
            toast.error("error: " + err);
        })
    }

    return (
        <Admin>
            <Tabs
                index={index}
                setIndex={setIndex}
                tabs={[
                    {
                        title: "Honadonlar",
                        content: (
                            <div>
                                <div>
                                    <Table bordered>
                                        <thead>
                                        <tr>
                                            <th>T/r</th>
                                            <th>Nomi</th>
                                            <th>Oshhona</th>
                                            <th>MehmonHona</th>
                                            <th>Yotohona</th>
                                            <th>Balkon</th>
                                            <th>Kirish</th>
                                            <th>Kvqiymadi</th>
                                            <th>UmmumiyMaydon</th>
                                            <th>Uyraqami</th>
                                            <th>BinoRaqami</th>
                                            <th>ObectNomi</th>
                                            <th>Etaji</th>
                                            <th>Kvnarhi</th>
                                            <th>Tip</th>
                                            <th colSpan="2">Action</th>
                                        </tr>
                                        </thead>
                                        {data &&
                                            data.map((item, i) =>
                                                <tbody key={i}>
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item.Nomi}</td>
                                                    <td>{item.Oshhona}</td>
                                                    <td>{item.MehmonHona}</td>
                                                    <td>{item.Yotohona}</td>
                                                    <td>{item.Balkon}</td>
                                                    <td>{item.Kirish}</td>
                                                    <td>{item.Kvqiymadi}</td>
                                                    <td>{item.UmmumiyMaydon}</td>
                                                    <td>{item.Uyraqami}</td>
                                                    <td>{item.BinoRaqami}</td>
                                                    <td>{item.ObectNomi}</td>
                                                    <td>{item.Etaji}</td>
                                                    <td>{item.Kvnarhi}</td>
                                                    <td>{item.Tip}</td>
                                                    <td><Button color="warning" outline onClick={() => {
                                                        openEditModal();
                                                        setHonadon(item);
                                                    }}>edit</Button></td>
                                                    <td><Button color="success" outline onClick={() => {
                                                        openDeleteModal();
                                                        setHonadon(item);
                                                    }}>delete</Button></td>
                                                </tr>
                                                </tbody>
                                            )
                                        }
                                    </Table>
                                </div>
                                <Modal isOpen={modal}>
                                    <ModalHeader>
                                        Add Honadon
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input className="mb-2" id="Nomi" type="text" placeholder="Nomi"/>
                                        <Input className="mb-2" id="Oshhona" type="number" placeholder="Oshhona"/>
                                        <Input className="mb-2" id="MehmonHona" type="number" placeholder="MehmonHona"/>
                                        <Input className="mb-2" id="Yotohona" type="number" placeholder="Yotohona"/>
                                        <Input className="mb-2" id="Balkon" type="number" placeholder="Balkon"/>
                                        <Input className="mb-2" id="Kirish" type="text" placeholder="Kirish"/>
                                        <Input className="mb-2" id="Kvqiymadi" type="number" placeholder="Kvqiymadi"/>
                                        <Input className="mb-2" id="UmmumiyMaydon" type="number"
                                               placeholder="UmmumiyMaydon"/>
                                        <Input className="mb-2" id="Uyraqami" type="number" placeholder="Uyraqami"/>
                                        <Input className="mb-2" id="BinoRaqami" type="number" placeholder="BinoRaqami"/>
                                        <Input className="mb-2" id="ObectNomi" type="text" placeholder="ObectNomi"/>
                                        <Input className="mb-2" id="Etaji" type="number" placeholder="Etaji"/>
                                        <Input className="mb-2" id="Kvnarhi" type="number" placeholder="Kvnarhi"/>
                                        <Input className="mb-2" id="Tip" type="number" placeholder="Tip"/>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={openModal}>Cancel</Button>
                                        <Button onClick={addHonadon}>Save</Button>
                                    </ModalFooter>
                                </Modal>

                                <Modal isOpen={editModal}>
                                    <ModalHeader>
                                        Edit Honadon
                                    </ModalHeader>
                                    <ModalBody>
                                        <Input className="mb-2" id="Nomi" type="text" placeholder="Nomi"/>
                                        <Input className="mb-2" id="Oshhona" type="number" placeholder="Oshhona"/>
                                        <Input className="mb-2" id="MehmonHona" type="number" placeholder="MehmonHona"/>
                                        <Input className="mb-2" id="Yotohona" type="number" placeholder="Yotohona"/>
                                        <Input className="mb-2" id="Balkon" type="number" placeholder="Balkon"/>
                                        <Input className="mb-2" id="Kirish" type="text" placeholder="Kirish"/>
                                        <Input className="mb-2" id="Kvqiymadi" type="number" placeholder="Kvqiymadi"/>
                                        <Input className="mb-2" id="UmmumiyMaydon" type="number"
                                               placeholder="UmmumiyMaydon"/>
                                        <Input className="mb-2" id="Uyraqami" type="number" placeholder="Uyraqami"/>
                                        <Input className="mb-2" id="BinoRaqami" type="number" placeholder="BinoRaqami"/>
                                        <Input className="mb-2" id="ObectNomi" type="text" placeholder="ObectNomi"/>
                                        <Input className="mb-2" id="Etaji" type="number" placeholder="Etaji"/>
                                        <Input className="mb-2" id="Kvnarhi" type="number" placeholder="Kvnarhi"/>
                                        <Input className="mb-2" id="Tip" type="number" placeholder="Tip"/>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="" onClick={openEditModal}>Cancel</Button>
                                        <Button color="success" onClick={editHonadon}>Edit</Button>
                                    </ModalFooter>
                                </Modal>

                                <Modal isOpen={deleteModal}>
                                    <ModalHeader>
                                        Delete Honadon
                                    </ModalHeader>
                                    <ModalBody>
                                        Siz haqiqatdaham ushbu Honadon ni uchirmoqchimisiz?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={openDeleteModal}>Cancel</Button>
                                        <Button onClick={deleteHonadon}>Delete</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                            // <StyledTable columns={columns} data={data}/>
                        ),
                    },
                ]}
                tabRightContent={[
                    {
                        icon: <PlusCircleOutlined/>,
                        onClick: () => openModal(),
                    },
                ]}
            />
        </Admin>
    );
}

export default Uy;
