import StyledTable from "../table/table";
import {Button} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";

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

    useEffect(() => {
        axios.get("https://houses-adminpanel.herokuapp.com/api/object")
            .then(res => {
                setData(res.data.data);
            });
    })

    return (
        <div>
            <StyledTable columns={columns} data={data}/>
        </div>
    );
}

export default ObjectPage;
