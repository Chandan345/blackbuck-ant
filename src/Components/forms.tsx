// import { Button, Modal } from 'antd';
import { Avatar, Button, Card, Col, Icon, Layout, List, Menu, Row, Table } from 'antd';
import * as React from 'react';


const { Header, Content, Sider } = Layout;

const columns = [{
    dataIndex: 'id',
    title: 'Name',

}, {
    dataIndex: 'idate',
    title: 'Indent Date',

}, {
    dataIndex: 'edate',
    title: 'Expiry date',

}, {
    dataIndex: 'from',
    title: 'From',

}, {
    dataIndex: 'to',
    title: 'To',

}, {
    dataIndex: 'truck',
    title: 'Truck Type',

}, {
    dataIndex: 'transporter',
    title: 'Transporter',

}, {
    dataIndex: 'status',
    title: 'Status',

}];

const data: any = [];
for (let i = 0; i < 46; i++) {
    data.push({
        edate: `21/08/2018`,
        from: `Bangalore`,
        id: `1234`,
        idate: `25/08/2018`,
        key: i,
        status: `Confirmed`,
        to: `Delhi`,
        transporter: `Zinka`,
        truck: `16`
    });
}

class Forms extends React.Component {
    public state = {
        collapsed: false,
        loading: false,
        selectedRowKeys: [], // Check here to configure the default column    
        visible: false
    }

    public showModal = () => {
        this.setState({
            visible: true,
        });
    }

    public hideModal = () => {
        this.setState({
            visible: false,
        });
    }



    public toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    public onSelectChange = (selectedRowKeys: any) => {
        // console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    public render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            onChange: this.onSelectChange,
            selectedRowKeys,

        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            // <div>
            //     <Button type="default" onClick={this.showModal}>Modal</Button>
            //     <Modal
            //         title="Modal"
            //         visible={this.state.visible}
            //         onOk={this.hideModal}
            //         onCancel={this.hideModal}
            //         okText="Okay"
            //         cancelText="Cancel"
            //     >
            //         <p>Bla bla ...</p>
            //         <p>Bla bla ...</p>
            //         <p>Bla bla ...</p>
            //     </Modal>
            // </div>

            <Layout>
                <Sider
                    trigger={null}
                    collapsible={false}
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ marginTop: 60 }}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <span className="span-menu">
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            Indents
                        </span>
                        <span style={{ float: 'right', marginRight: 20 }}><Avatar size="large" icon="user" /></span>
                    </Header>
                    <div style={{ marginTop: 20, marginRight: 20 }}>
                        <Button type="default" icon="file" style={{ float: 'right', marginRight: 5 }}><Icon type="down" /></Button>
                        <Button type="default" icon="file-add" style={{ float: 'right', marginRight: 5 }} />
                        <Button type="primary" icon="download" style={{ float: 'right', marginRight: 5 }}>Create Indents</Button>
                    </div>
                    <div style={{ padding: '15px 0px 15px 15px' }}>
                        <Row gutter={16}>
                            <Col span={4}>
                                <Card><List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar icon="profile" style={{ color: 'black', marginTop: 7 }} />}
                                        title="745"
                                        description="All Indents"
                                    />

                                </List.Item></Card>
                            </Col>
                            <Col span={4}>
                                <Card>
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar icon="close" style={{ color: 'red', marginTop: 7 }} />}
                                            title="124"
                                            description="Defalted"
                                        />
                                        <div style={{ color: 'red', marginTop: 25 }}>12%</div>
                                    </List.Item>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card>
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar icon="warning" style={{ color: 'orange', marginTop: 7 }} />}
                                            title="256"
                                            description="Pending"
                                        />
                                        <div style={{ color: 'orange', marginTop: 25 }}>21%</div>
                                    </List.Item>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card>
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar icon="file" style={{ color: 'blue', marginTop: 7 }} />}
                                            title="160"
                                            description="Reported"
                                        />
                                        <div style={{ color: 'blue', marginTop: 25 }}>17%</div>
                                    </List.Item>
                                </Card>
                            </Col>
                            <Col span={4}>
                                <Card>
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar icon="check" style={{ color: 'green', marginTop: 7 }} />}
                                            title="512"
                                            description="Confirmed"
                                        />
                                        <div style={{ color: 'green', marginTop: 25 }}>55%</div>
                                    </List.Item>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <Content style={{ margin: '0px 16px', background: '#fff', minHeight: 280 }}>
                        <span style={{ marginLeft: 8 }}>
                            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                        </span>
                        <Table rowSelection={rowSelection} columns={columns} dataSource={data} style={{background: "#fff"}}/>
                    </Content>
                </Layout>
            </Layout>

        )
    }
}


export default Forms;