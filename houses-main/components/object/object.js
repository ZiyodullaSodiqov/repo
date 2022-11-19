import {Button} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {toast} from "react-toastify";
import {Url} from "../api";

function ObjectPage() {

    const [data, setData] = useState([]);
    const [binoList, setBinoList] = useState([]);
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [object, setObject] = useState("");

    const openModal = () => setModal(!modal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);


    const deleteObject = () => {
        axios.delete(Url + "/object/delete/" + object._id)
            .then(() => {
                toast.success("successfully saved delete")
            });
        getObject();
    };

    const editObject = () => {
        let obj = {
            Nomi: document.getElementById("Nomi").value,
            Ummumiy: document.getElementById("Ummumy").value,
            Bino: document.getElementById("Bino").value,
            QurilishniBoshlanishSanasi: document.getElementById("QurilishniBoshlanishSanasi").value,
            QurilishniBitishSanasi: document.getElementById("QurilishniBitirishSanasi").value,
            Tip: document.getElementById("Tip").value
        };
        axios.put(Url + "/object/update/" + object._id, obj)
            .then(() => {
                console.log("successfully edit Object");
            });
        toast.success("successfully edit Object");
        openEditModal();
        getObject();
    }

    useEffect(() => {getObject();}, []);

    const getObject = () => {
        axios.get(Url + "/object")
            .then(res => {
                setData(res.data.data);
            });
    }

    const getBino = () => {
        axios.get(Url + "/bino")
            .then(res => {
                setBinoList(res.data.data);
            });
    }

    const addObj = () => {
        let obj = {
            Nomi: document.getElementById("Nomi").value,
            Ummumiy: document.getElementById("Ummumy").value,
            Bino: document.getElementById("Bino").value,
            QurilishniBoshlanishSanasi: document.getElementById("QurilishniBoshlanishSanasi").value,
            QurilishniBitishSanasi: document.getElementById("QurilishniBitirishSanasi").value,
            Tip: document.getElementById("Tip").value
        }
        axios.post( Url + "/object", obj)
            .then(() => {
                toast.success("successfully saved object");
            }).catch(() => {
            toast.error("error");
        });
        openModal();
        getObject();
    }

    return (
        <div>
            <Button onClick={() => {
                openModal();
                getBino();
            }} style={{
                height: "40px",
                borderRadius: "50%"
            }}>+</Button>

            {/*<StyledTable columns={columns} data={data}/>*/}

            <div>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>T/r</th>
                        <th>Nomi</th>
                        <th>Bino</th>
                        <th>Ummumiy</th>
                        <th>Qurilishni Boshlanish Sanasi</th>
                        <th>Qurilishni Bitish Sanasi</th>
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
                                <td>{item.Bino}</td>
                                <td>{item.Ummumiy}</td>
                                <td>{item.QurilishniBoshlanishSanasi}</td>
                                <td>{item.QurilishniBitishSanasi}</td>
                                <td>{item.Tip}</td>
                                <td><Button color="warning" outline onClick={() => {
                                    openEditModal();
                                    setObject(item);
                                    getBino();
                                }}>edit</Button></td>
                                <td><Button color="success" outline onClick={() => {
                                    openDeleteModal();
                                    setObject(item);
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
                    <Input className="mb-2" id="Ummumy" type="text" placeholder="Ummumy"/>
                    <select id="Bino" className="form-select mb-2" aria-label="Default select example">
                        <option selected disabled value="0">Select Bino</option>
                        {binoList && binoList.map(item => <option key={item._id}
                                                                            value={item._id}>{item.Nomi}</option>)}
                    </select>
                    <Label>Qurilishni Boshlanish Sanasi</Label>
                    <Input className="mb-2" id="QurilishniBoshlanishSanasi" type="date"
                           placeholder="Qurilishni Boshlanish Sanasi"/>
                    <Label>Qurilishni Bitirish Sanasi</Label>
                    <Input className="mb-2" id="QurilishniBitirishSanasi" type="date"
                           placeholder="QurilishniBitirishSanasi"/>
                    <Input className="mb-2" id="Tip" type="number" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openModal}>Cancel</Button>
                    <Button onClick={addObj}>Save</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={editModal}>
                <ModalHeader>
                    Edit Object
                </ModalHeader>
                <ModalBody>
                    <Input defaultValue={object.Nomi} className="mb-2" id="Nomi" type="text" placeholder="Nomi"/>
                    <Input defaultValue={object.Ummumiy} className="mb-2" id="Ummumy" type="text" placeholder="Ummumy"/>
                    <select id="Bino" className="form-select mt-2" aria-label="Default select example">
                        <option selected disabled value="0">Select Bino</option>
                        {binoList && binoList.map(item => <option key={item._id}
                                                                  value={item._id}>{item.Nomi}</option>)}
                    </select>
                    <Input className="mt-2" id="QurilishniBoshlanishSanasi" type="date"
                           placeholder="Qurilishni Boshlanish Sanasi"/>
                    <Input className="mt-2" id="QurilishniBitirishSanasi" type="date"
                           placeholder="QurilishniBitirishSanasi"/>
                    <Input defaultValue={object.Tip} className="mt-2" id="Tip" type="number" placeholder="Tip"/>
                </ModalBody>
                <ModalFooter>
                    <Button color="" onClick={openEditModal}>Cancel</Button>
                    <Button color="success" onClick={editObject}>Edit</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={deleteModal}>
                <ModalHeader>
                    Delete Object
                </ModalHeader>
                <ModalBody>
                    Siz haqiqatdaham ushbu object ni uchirmoqchimisiz?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openDeleteModal}>Cancel</Button>
                    <Button onClick={deleteObject}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ObjectPage;
