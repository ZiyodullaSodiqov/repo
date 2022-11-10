import React, {useState} from 'react';
import {Admin, Tabs} from "components";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import Inpusts from './inpusts';

function Debt(props) {
    const [index, setIndex] = useState(0)

    const handleDelete = () => {

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
                            <div>
                                Shartnoma
                            </div>
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
            <Inpusts />
        </Admin>
    
    );
}

export default Debt;
