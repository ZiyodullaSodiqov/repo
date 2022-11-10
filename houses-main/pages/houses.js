import React, {useState} from 'react';
import {Admin, Tabs, HousePage} from "components";
import {DeleteOutlined,PlusCircleOutlined} from "@ant-design/icons";

function Object(props) {
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
                        title: "Uylar",
                        content: (
                            <div>
                                <HousePage/>
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
        </Admin>

    );
}

export default Object;
