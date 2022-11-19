import React, {useState} from 'react';
import {Admin, ObjectPage, Tabs} from "components";
import {PlusCircleOutlined} from "@ant-design/icons";

function Object() {
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
                        title: "Obyektlar",
                        content: (
                            <div>
                                <ObjectPage/>
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
