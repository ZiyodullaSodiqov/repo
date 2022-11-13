import {Button} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Url} from "../api";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {toast} from "react-toastify";

function HousePage() {

    const [data, setData] = useState([]);
    const [objectList, setObjectList] = useState([]);
    const [uy, setUy] = useState("");
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        getUy();
    }, []);

    const openModal = () => setModal(!modal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);
    const getUy = () => {
        axios.get(Url + "/bino")
            .then(res => {
                setData(res.data.data);
            });
    }

    const getObject = () => {
        axios.get(Url + "/object")
            .then(res => {
                setObjectList(res.data.data);
            });
    };

    const byId = (id) => document.getElementById(id).value;

    const addUy = () => {
        let obj = {
            Nomi: byId("Nomi"),
            Object: byId("Object"),
            Qavatliligi: byId("Qavatliligi"),
            PodezlarSoni: byId("PodezlarSoni"),
            HonalarSoni: byId("HonalarSoni"),
            Raqami: byId("Raqami"),
            UmmumiyKvadrati: byId("UmmumiyKvadrati"),
            Tip: byId("Tip"),
        }
        axios.post(Url + "/bino", obj)
            .then(() => {
                toast.success("successfully saved House");
            });
        getUy();
        openModal();
    }

    const editUy = () => {
        let obj = {
            Nomi: byId("Nomi"),
            Object: byId("Object"),
            Qavatliligi: byId("Qavatliligi"),
            PodezlarSoni: byId("PodezlarSoni"),
            HonalarSoni: byId("HonalarSoni"),
            Raqami: byId("Raqami"),
            UmmumiyKvadrati: byId("UmmumiyKvadrati"),
            Tip: byId("Tip"),
        };
        axios.put(Url + "/bino/update/" + uy._id, obj)
            .then(() => {
                toast.success("Successfully Edit House");
            });
        getUy();
        openEditModal();
    }

    const deleteUy = () => {
        axios.delete(Url + "/bino/delete/" + uy._id)
            .then(() => {
                toast.success("Successfully Home delete")
            });
        openDeleteModal();
        getUy();
    }

    return (
        <div>
            {/*<StyledTable columns={columns} data={data}/>*/}

            <Button onClick={() => {
                openModal();
                getObject();
            }} style={{
                height: "40px",
                borderRadius: "50%"
            }}>+</Button>

            <div>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>T/r</th>
                        <th>Nomi</th>
                        <th>Object</th>
                        <th>Qavatliligi</th>
                        <th>PodezlarSoni</th>
                        <th>HonalarSoni</th>
                        <th>Raqami</th>
                        <th>UmmumiyKvadrati</th>
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
                                <td>{item.Object}</td>
                                <td>{item.Qavatliligi}</td>
                                <td>{item.PodezlarSoni}</td>
                                <td>{item.HonalarSoni}</td>
                                <td>{item.Raqami}</td>
                                <td>{item.UmmumiyKvadrati}</td>
                                <td>{item.Tip}</td>
                                <td><Button color="warning" outline onClick={() => {
                                    openEditModal();
                                    setUy(item);
                                    getObject();
                                }}>edit</Button></td>
                                <td><Button color="success" outline onClick={() => {
                                    openDeleteModal();
                                    setUy(item);
                                }}>delete</Button></td>
                            </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
            <Modal isOpen={modal}>
                <ModalHeader>
                    Add Object
                </ModalHeader>
                <ModalBody>
                    <Input className="mb-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <select id="Object" className="form-select mb-2" aria-label="Default select example">
                        <option selected disabled value="0">Select Bino</option>
                        {objectList && objectList.map(item => <option key={item._id}
                                                                      value={item._id}>{item.Nomi}</option>)}
                    </select>
                    <Input className="mb-2" id="Qavatliligi" type="number" placeholder="Qavatliligi"/>
                    <Input className="mb-2" id="PodezlarSoni" type="number" placeholder="PodezlarSoni"/>
                    <Input className="mb-2" id="HonalarSoni" type="number" placeholder="HonalarSoni"/>
                    <Input className="mb-2" id="Raqami" type="number" placeholder="Raqami"/>
                    <Input className="mb-2" id="UmmumiyKvadrati" type="number" placeholder="UmmumiyKvadrati"/>
                    <Input className="mb-2" id="Tip" type="number" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openModal}>Cancel</Button>
                    <Button onClick={addUy}>Save</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={editModal}>
                <ModalHeader>
                    Edit Object
                </ModalHeader>
                <ModalBody>
                    <Input defaultValue={uy.Nomi} className="mb-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <select id="Object" className="form-select mb-2" aria-label="Default select example">
                        <option selected disabled value="0">Select Bino</option>
                        {objectList && objectList.map(item => <option key={item._id}
                                                                      value={item._id}>{item.Nomi}</option>)}
                    </select>
                    <Input defaultValue={uy.Qavatliligi} className="mb-2" id="Qavatliligi" type="number" placeholder="Qavatliligi"/>
                    <Input defaultValue={uy.PodezlarSoni} className="mb-2" id="PodezlarSoni" type="number" placeholder="PodezlarSoni"/>
                    <Input defaultValue={uy.HonalarSoni} className="mb-2" id="HonalarSoni" type="number" placeholder="HonalarSoni"/>
                    <Input defaultValue={uy.Raqami} className="mb-2" id="Raqami" type="number" placeholder="Raqami"/>
                    <Input defaultValue={uy.UmmumiyKvadrati} className="mb-2" id="UmmumiyKvadrati" type="number" placeholder="UmmumiyKvadrati"/>
                    <Input defaultValue={uy.Tip} className="mb-2" id="Tip" type="number" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openEditModal}>Cancel</Button>
                    <Button color="success" onClick={editUy}>Edit</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={deleteModal}>
                <ModalHeader>
                    Delete Object
                </ModalHeader>
                <ModalBody>
                    Siz haqiqatdaham ushbu Uy ni uchirmoqchimisiz?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Cancel</Button>
                    <Button onClick={deleteUy}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default HousePage;
