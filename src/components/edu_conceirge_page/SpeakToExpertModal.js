import React, { useState } from "react";
import { Modal, Form, Input, Button, Space, message } from "antd";
import { saveExpertRequest } from "../../services/firebaseService";

const { TextArea } = Input;

const SpeakToExpertModal = ({ open, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    const success = await saveExpertRequest(values);
    setLoading(false);

    if (success) {
      message.success("Your request has been submitted!");
      onCancel(); // close modal
    } else {
      message.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal
      title="Speak to an Expert"
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input placeholder="Enter your phone number" />
        </Form.Item>

        <Form.Item
          label="Details"
          name="details"
          rules={[{ required: true, message: "Please type something" }]}
        >
          <TextArea rows={4} placeholder="Type your details..." />
        </Form.Item>

        <Space style={{ display: "flex", justifyContent: "end" }}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Space>
      </Form>
    </Modal>
  );
};

export default SpeakToExpertModal;
