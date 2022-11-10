import StyledTable from "../table/table";
import {Button} from "antd";
import {useEffect, useState} from "react";
import axios from "axios";

const columns = [
    {
        title: 'Uy maydoni',
        dataIndex: 'Nomi',
        key: 'Nomi',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Qavatliligi',
        dataIndex: 'Qavatliligi',
        key: 'Qavatliligi',
    },
    {
        title: 'PodezlarSoni',
        dataIndex: 'PodezlarSoni',
        key: 'PodezlarSoni',
    },
    {
        title: 'HonalarSoni',
        dataIndex: 'HonalarSoni',
        key: 'HonalarSoni',
    },
    {
        title: 'Raqami',
        dataIndex: 'Raqami',
        key: 'Raqami',
    },
    {
        title: 'UmmumiyKvadrati',
        dataIndex: 'UmmumiyKvadrati',
        key: 'UmmumiyKvadrati',
    },
    {
        title: 'Tip',
        dataIndex: 'Tip',
        key: 'Tip',
    },
    {
        title: '',
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
        title: '',
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
// const data = [
//     {
//         key: '1',
//         floor: '2',
//         location: "Amir Temur 105 a uy",
//         padez:"3",
//         area: '120 m2',
//         rooms:4
//     },
//     {
//         key: '1',
//         floor: '2',
//         location: "Amir Temur 00 a uy",
//         padez:"3",
//         area: '120 m2',
//         rooms:4
//     },
//     {
//         key: '1',
//         floor: '2',
//         location: "Amir Temur 000 a uy",
//         padez:"3",
//         area: '120 m2',
//         rooms:4
//     },
// ];


function HousePage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://houses-adminpanel.herokuapp.com/api/bino")
            .then(res => {
                setData(res.data.data);
                console.log()
            });
    }, [])

    return (
        <div>
            <StyledTable columns={columns} data={data}/>
        </div>
    );
}

export default HousePage;
