import { Avatar, Card, Col, List, Row, } from 'antd';
import * as React from 'react';
class Details extends React.Component {
    public render() {
        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={4}>
                        <Card><List.Item>
                            <List.Item.Meta
                                avatar={<Avatar icon="file" />}
                                title="745"
                                description="All Indents"
                            />
                            <div>content</div>
                        </List.Item></Card>
                    </Col>
                    <Col span={4}>
                        <Card>Card content</Card>
                    </Col>
                    <Col span={4}>
                        <Card>Card content</Card>
                    </Col>
                    <Col span={4}>
                        <Card>Card content</Card>
                    </Col>
                    <Col span={4}>
                        <Card>Card content</Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Details;