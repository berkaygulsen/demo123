import React, {useState} from 'react';
import {Button, Table, Typography} from 'antd';
import {dataSource} from '../dataSource';
import {Edit} from '../actions';

const { Title, Text } = Typography;

const columns = [
  {
    title: title => <Text disabled>NAME</Text>,
    dataIndex: 'name',
    key: 'name',
    render: text => <a style={{ marginRight: "8" }}>{text}</a>
  },
  {
    title: title => <Text disabled>EMAIL</Text>,
    dataIndex: 'email',
    key: 'email'
  },{
    title: title => <Text disabled>PHONE NUMBER</Text>,
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: title => <Text disabled>CITY</Text>,
    dataIndex: 'city',
    key: 'city',
    render: text => <span className="uppercase">{text}</span>
  },
  {
    title: 'ACTIONS',
    dataIndex: 'edit',
    key: 'edit',
    render: item => <Button style={{width: 65}} type="primary">Edit</Button>
  }
]



const UserList = () => {
  const [modalStatus, setModalStatus] = useState({visible: true});
  const callBack = () => {
    console.log()
    setModalStatus({visible:false})
  }
  return (
    <div>
      <Title style={{ marginTop: 20 }} level={2}>User List</Title>
      <Table dataSource={dataSource} columns= {columns}/>
      <Edit visible={true} callBack={callBack} />
    </div>
  )
}

export default UserList;
