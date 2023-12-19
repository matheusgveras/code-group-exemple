
import React, { FC, useContext, useEffect } from 'react';
import { GitHubContext } from '../../Context/GitHubContext';
import { GitHubContextType } from '../../@types/GitHubContextType';

function Search() {
    // const [form] = Form.useForm();
    const { getGitHubUserDetail } = useContext(GitHubContext)
    // const userNameValue = Form.useWatch('username', form);
    // const onFinish = () => {
    //     message.success('Submit success! ' + userNameValue);
    //     //getGitHubUserDetail(userNameValue);
    // };

    // const onFinishFailed = () => {
    //     message.error('Submit failed!');
    // };

    // const onFill = () => {
    //     form.setFieldsValue({
    //         url: 'https://taobao.com/',
    //     });
    // };
    useEffect(() => {
        getGitHubUserDetail('matheusgveras')
    },[])
    return (
        // <Row justify="center" gutter={[16, 16]}>
        //     <Col  span={18}>
        //         <Form
        //             form={form}
        //             layout="vertical"
        //             onFinish={onFinish}
        //             onFinishFailed={onFinishFailed}
        //             autoComplete="off"
        //         >
        //             <Form.Item
        //                 name="username"
        //                 label="Username"
        //                 rules={[{ required: true }, { type: 'string', min: 3 }]}
        //             >
        //                 <Input placeholder="input placeholder" />
        //             </Form.Item>
        //             <Form.Item>
        //                 <Space>
        //                     <Button type="primary" htmlType="submit">
        //                         Show Github Detail
        //                     </Button>
        //                     <Button type="primary" onClick={onFill}>
        //                         Use default user
        //                     </Button>
        //                 </Space>
        //             </Form.Item>
        //         </Form>
        //     </Col>
        // </Row>
        <p>teste</p>
    );
};
export default Search;