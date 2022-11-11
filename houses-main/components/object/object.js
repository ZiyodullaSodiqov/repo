import {Button} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Input, Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import {toast} from "react-toastify";

function ObjectPage() {

    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [id, setId] = useState("");

    const openModal = () => setModal(!modal);
    const openEditModal = () => setEditModal(!editModal);
    const openDeleteModal = () => setDeleteModal(!deleteModal);


    const deleteObject = () => {
        axios.delete("https://houses-adminpanel.herokuapp.com/api/object/delete/" + id)
            .then(() => {
                toast.success("successfully saved delete")
            });
        alert("aaa")
    };

    const editObject = () => {

    }

    useEffect(() => {
        axios.get("https://houses-adminpanel.herokuapp.com/api/object")
            .then(res => {
                setData(res.data.data);
            });
    });

    const addObj = () => {
        let obj = {
            Nomi: document.getElementById("Nomi").value,
            Ummumiy: document.getElementById("Ummumy").value,
            Bino: document.getElementById("Bino").value,
            QurilishniBoshlanishSanasi: document.getElementById("QurilishniBoshlanishSanasi").value,
            QurilishniBitishSanasi: document.getElementById("QurilishniBitirishSanasi").value,
            Tip: document.getElementById("Tip").value
        }
        console.log(obj);
        axios.post("https://houses-adminpanel.herokuapp.com/api/object", obj)
            .then(() => {
                toast.success("successfully saved object");
            }).catch(() => {
            toast.error("error");
        });
        openModal();
    }

    return (
        <div>
            <Button onClick={openModal} style={{
                height: "40px",
                borderRadius: "50%"
            }}>+</Button>

            {/*<StyledTable columns={columns} data={data}/>*/}

            <div>
                <Table bordered>
                    <thead>
                    <tr>
                        <th>Nomi</th>
                        <th>Ummumiy</th>
                        <th>Bino</th>
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
                                <td>{item.Name}</td>
                                <td>{item.Bino}</td>
                                <td>{item.Ummumiy}</td>
                                <td>{item.QurilishniBoshlanishSanasi}</td>
                                <td>{item.QurilishniBitishSanasi}</td>
                                <td>{item.Tip}</td>
                                <td><Button color="warning" outline onClick={() => {
                                    openEditModal();
                                    setId(item._id);
                                }}>edit</Button></td>
                                <td><Button color="success" outline onClick={() => {
                                    openDeleteModal();
                                    setId(item._id);
                                }}>delete</Button></td>
                            </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
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
