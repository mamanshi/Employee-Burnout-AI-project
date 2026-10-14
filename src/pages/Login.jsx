import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
} from "antd";
import {              
  MailOutlined,
  LockOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import axios from"axios";

const { Title, Text } = Typography;

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
const[data,setData]=useState()
  const onFinish = (values) => {
    axios.post('http://localhost:5001/api/adhaar/adhaarCreate',values).then((res)=>{
        console.log("res",res.data.message)
         setData(res.data.message);

    })
    .catch((error)=>{
      console.log("error",error.response.data.message)
      setData(error.response.data.message)
    })
  console.log(values)
  };

  return (


       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4">
        <h1>{data}</h1>
      <Card
        className="w-full max-w-md rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div className="flex justify-center mb-5">
          <div className="bg-blue-600 rounded-full p-4">
            <SafetyCertificateOutlined
              style={{ color: "#fff", fontSize: "36px" }}
            />
          </div>
        </div>

        <Title
          level={2}
          style={{ textAlign: "center", color: "#fff", marginBottom: 5 }}
        >
          {isLogin ? "Welcome Back" : "Create Account"}
        </Title>

        <Text
          style={{
            display: "block",
            textAlign: "center",
            color: "#d1d5db",
            marginBottom: 25,
          }}
        >
          {isLogin
            ? "Login to Burnout AI Dashboard"
            : "Register for burnout AI"}
        </Text>

        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          {!isLogin && (
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your full name",
                },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined />}
                placeholder="Full Name"
              />
            </Form.Item>
          )}

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (
                      !value ||
                      getFieldValue("password") === value
                    ) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Passwords do not match")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>
          )}

          {isLogin && (
            <div className="flex justify-between items-center mb-4">
              <Checkbox style={{ color: "#fff" }}>
                Remember Me
              </Checkbox>

              <a
                href="#"
                style={{
                  color: "#60a5fa",
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </a>
            </div>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
            >
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form.Item>
        </Form>

        <div
          style={{
            textAlign: "center",
            color: "#d1d5db",
          }}
        >
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <Button
            type="link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </Card>
    </div>
  );
}