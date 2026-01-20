import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  Card,
  Typography,
  Space,
  Avatar,
  Progress,
  Modal,
  Tag,
  Row,
  Col,
  Divider,
  Alert
} from 'antd';
import {
  SendOutlined,
  RobotOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ReloadOutlined,
  MessageOutlined,
  CloseOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import Confetti from 'react-confetti';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const FAQStyleStudyChatbot = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [currentInput, setCurrentInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: "👋 Hello! What's your full name?",
      field: 'fullName',
      type: 'text',
      placeholder: 'Enter your full name',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please enter a valid name'
    },
    {
      id: 2,
      question: "📧 What's your email address?",
      field: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      error: 'Please enter a valid email'
    },
    {
      id: 3,
      question: "🎂 How old are you?",
      field: 'age',
      type: 'number',
      placeholder: 'Enter your age',
      validation: (value) => parseInt(value) >= 13 && parseInt(value) <= 100,
      error: 'Please enter age between 13-100'
    },
    {
      id: 4,
      question: "🌍 Which country are you from?",
      field: 'country',
      type: 'text',
      placeholder: 'Enter your country',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please enter a valid country'
    },
    {
      id: 5,
      question: "🏙️ And your city?",
      field: 'city',
      type: 'text',
      placeholder: 'Enter your city',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please enter a valid city'
    },
    {
      id: 6,
      question: "🎓 What's your education level?",
      field: 'educationLevel',
      type: 'quick',
      options: ['School', 'College', 'University', 'Other'],
      validation: (value) => !!value
    },
    {
      id: 7,
      question: "📚 What are you studying?",
      field: 'fieldOfStudy',
      type: 'text',
      placeholder: 'e.g., Computer Science, Medicine, Business',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please enter your field of study'
    },
    {
      id: 8,
      question: "🏫 What's your institution name?",
      field: 'currentInstitution',
      type: 'text',
      placeholder: 'Enter your school/college name',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please enter institution name'
    },
    {
      id: 9,
      question: "⏰ How many hours per day can you study?",
      field: 'dailyStudyGoal',
      type: 'quick',
      options: ['1-2 hours', '3-4 hours', '5-6 hours', '7+ hours'],
      validation: (value) => !!value
    },
    {
      id: 10,
      question: "📖 Which subjects do you want to study?",
      field: 'subjects',
      type: 'text',
      placeholder: 'e.g., Math, Physics, English',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please enter at least one subject'
    },
    {
      id: 11,
      question: "🌅 When do you prefer to study?",
      field: 'preferredStudyTime',
      type: 'quick',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
      validation: (value) => !!value
    },
    {
      id: 12,
      question: "🎯 How do you prefer to study?",
      field: 'studyMode',
      type: 'quick',
      options: ['Self-study', 'Online classes', 'With tutor'],
      validation: (value) => !!value
    },
    {
      id: 13,
      question: "✅ What do you need help with?",
      field: 'helpWith',
      type: 'text',
      placeholder: 'e.g., Time management, Exam preparation',
      validation: (value) => value && value.trim().length >= 2,
      error: 'Please specify what you need help with'
    },
    {
      id: 14,
      question: "🔔 Would you like study reminders?",
      field: 'studyReminders',
      type: 'quick',
      options: ['Yes please!', 'No thanks'],
      validation: (value) => !!value
    }
  ];

  useEffect(() => {
    if (inputRef.current && showChat && currentStep < questions.length) {
      inputRef.current.focus();
    }
  }, [currentStep, showChat]);

  const handleResponse = () => {
    if (!currentInput.trim()) return;

    const currentQuestion = questions[currentStep];
    
    // Validate response
    if (!currentQuestion.validation(currentInput)) {
      Modal.error({
        title: 'Invalid Input',
        content: currentQuestion.error || 'Please provide a valid response',
        okText: 'Try Again'
      });
      return;
    }

    // Save response
    setUserResponses(prev => ({
      ...prev,
      [currentQuestion.field]: currentInput
    }));

    // Clear input
    setCurrentInput('');

    // Move to next question or show summary
    setLoading(true);
    setTimeout(() => {
      if (currentStep + 1 < questions.length) {
        setCurrentStep(prev => prev + 1);
      } else {
        setShowSummary(true);
      }
      setLoading(false);
    }, 500);
  };

  const handleQuickSelect = (option) => {
    setCurrentInput(option);
    setTimeout(() => {
      handleResponse();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleResponse();
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setUserResponses({});
    setCurrentInput('');
    setShowSummary(false);
  };

  const renderCurrentQuestion = () => {
    const question = questions[currentStep];
    
    if (!question) return null;

    return (
      <div className="question-card">
        <div className="bot-message">
          <Avatar 
            size={40}
            icon={<RobotOutlined />}
            style={{ 
              backgroundColor: '#1890ff',
              marginRight: 12
            }}
          />
          <div className="message-content">
            <div className="message-bubble bot">
              <Text style={{ fontSize: '16px', lineHeight: 1.5 }}>
                {question.question}
              </Text>
            </div>
            <div className="message-time">Just now</div>
          </div>
        </div>

        {/* Quick Options for specific question types */}
        {question.type === 'quick' && (
          <div className="quick-options">
            <Space wrap style={{ marginTop: 16, justifyContent: 'center', width: '100%' }}>
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  type="default"
                  size="large"
                  onClick={() => handleQuickSelect(option)}
                  disabled={loading}
                  style={{
                    borderRadius: '20px',
                    padding: '8px 20px',
                    borderColor: '#1890ff',
                    color: '#1890ff'
                  }}
                >
                  {option}
                </Button>
              ))}
            </Space>
          </div>
        )}
      </div>
    );
  };

  const renderInputArea = () => {
    const question = questions[currentStep];
    
    if (!question || question.type === 'quick') return null;

    return (
      <div className="input-area">
        <div className="input-wrapper">
          <Input
            ref={inputRef}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={question.placeholder}
            size="large"
            disabled={loading}
            style={{
              borderRadius: '24px',
              padding: '12px 20px',
              fontSize: '16px'
            }}
            suffix={
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleResponse}
                loading={loading}
                disabled={!currentInput.trim()}
                style={{
                  borderRadius: '50%',
                  backgroundColor: '#1890ff',
                  border: 'none'
                }}
              />
            }
          />
        </div>
        <div className="input-hint">
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Press Enter to send
          </Text>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
  
    return (
      <div className="summary-screen">
        {showSummary && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={300}
          />
        )}
        
        <div className="summary-content">
          <div className="summary-header">
            <Avatar 
              size={80}
              icon={<CheckCircleOutlined />}
              style={{ 
                backgroundColor: '#52c41a',
                marginBottom: 20
              }}
            />
            <Title level={3} style={{ color: '#1890ff', marginBottom: 8 }}>
              🎉 All Done!
            </Title>
            <Text style={{ fontSize: '16px', color: '#666', marginBottom: 8 }}>
              Here's a summary of your responses:
            </Text>
            <Alert
              message="Review your information below"
              type="info"
              showIcon
              icon={<InfoCircleOutlined />}
              style={{ marginBottom: 24 }}
            />
          </div>

          <Card className="summary-card">
            <div className="responses-list">
              {questions.map((question, index) => (
                userResponses[question.field] && (
                  <div key={question.id} className="response-item">
                    <Row align="middle" gutter={16}>
                      <Col xs={24} sm={8} style={{ marginBottom: 8 }}>
                        <Text strong style={{ color: '#1890ff', fontSize: '14px' }}>
                          {question.question.replace(/[^\w\s?]/g, '')}
                        </Text>
                      </Col>
                      <Col xs={24} sm={16}>
                        <Tag 
                          color="blue" 
                          style={{ 
                            fontSize: '14px', 
                            padding: '4px 12px',
                            borderRadius: '12px'
                          }}
                        >
                          {userResponses[question.field]}
                        </Tag>
                      </Col>
                    </Row>
                    {index < questions.length - 1 && userResponses[questions[index + 1]?.field] && (
                      <Divider style={{ margin: '16px 0' }} />
                    )}
                  </div>
                )
              ))}
            </div>
          </Card>

          <div className="summary-actions">
            <Space direction="vertical" style={{ width: '100%' }}>
              <Button
                type="primary"
                size="large"
                icon={<CheckCircleOutlined />}
                onClick={() => {
                  Modal.success({
                    title: 'Study Plan Generated!',
                    content: 'Your personalized AI study plan will be emailed to you within 24 hours.',
                    okText: 'Got it!',
                    onOk: () => {
                      setShowChat(false);
                      setCurrentStep(0);
                      setUserResponses({});
                      setCurrentInput('');
                      setShowSummary(false);
                         navigate("/");
                    }
                  });
                }}
                style={{
                  width: '100%',
                  height: '48px',
                  fontSize: '16px',
                  backgroundColor: '#1890ff',
                  border: 'none',
                  borderRadius: '24px'
                }}
              >
                Generate My AI Study Plan
              </Button>
              
              <Button
                size="large"
                icon={<ReloadOutlined />}
                onClick={handleRestart}
                style={{
                  width: '100%',
                  height: '48px',
                  fontSize: '16px',
                  borderRadius: '24px'
                }}
              >
                Start Over
              </Button>
            </Space>
          </div>
        </div>
      </div>
    );
  };

  const renderProgressInfo = () => {
    const progressPercentage = ((currentStep + 1) / questions.length) * 100;
    const answeredQuestions = Object.keys(userResponses).length;
    
    return (
      <div className="progress-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Progress: {currentStep + 1}/{questions.length}
          </Text>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            {Math.round(progressPercentage)}% Complete
          </Text>
        </div>
        <Progress 
          percent={progressPercentage} 
          showInfo={false}
          strokeColor={{
            '0%': '#1890ff',
            '100%': '#52c41a',
          }}
          size="small"
        />
      </div>
    );
  };

  // if (!showChat) {
  //   return (
  //     <div className="chat-launcher">
  //       <div className="launcher-content">
  //         <Avatar 
  //           size={80}
  //           icon={<RobotOutlined />}
  //           style={{ 
  //             backgroundColor: '#1890ff',
  //             marginBottom: 24
  //           }}
  //         />
  //         <Title level={3} style={{ color: '#1890ff', marginBottom: 12 }}>
  //           AI Study Planner Assistant
  //         </Title>
  //         <Paragraph style={{ color: '#666', textAlign: 'center', marginBottom: 32, maxWidth: 400 }}>
  //           Answer a few quick questions and get your personalized AI study plan in minutes
  //         </Paragraph>
  //         <Button
  //           type="primary"
  //           size="large"
  //           icon={<MessageOutlined />}
  //           onClick={() => setShowChat(true)}
  //           style={{
  //             padding: '0 40px',
  //             height: '48px',
  //             fontSize: '16px',
  //             backgroundColor: '#1890ff',
  //             border: 'none',
  //             borderRadius: '24px'
  //           }}
  //         >
  //           Start Conversation
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }

  if (showSummary) {
    return renderSummary();
  }

  return (
    <div className="faq-chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="header-content">
          <Avatar 
            size={40}
            icon={<RobotOutlined />}
            style={{ 
              backgroundColor: '#1890ff',
              marginRight: 12
            }}
          />
          <div>
            <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
              Study AI Assistant
            </Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ 
                width: 6, 
                height: 6, 
                borderRadius: '50%', 
                backgroundColor: '#52c41a' 
              }} />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                Answering question {currentStep + 1}
              </Text>
            </div>
          </div>
        </div>
        
   <Button
  type="text"
  icon={<CloseOutlined />}
  onClick={() => {
    Modal.confirm({
      title: 'Exit Chat?',
      content: 'Your progress will be saved. You can continue later.',
      okText: 'Exit',
      cancelText: 'Stay',
      onOk: () => {
        if (typeof onClose === "function") {
          onClose(); // parent se close
        }
      },
    });
  }}
  style={{ color: '#666' }}
/>

      </div>

      {/* Progress Info */}
      <div className="progress-section">
        {renderProgressInfo()}
      </div>

      {/* Chat Content */}
      <div className="chat-content">
        {/* Current Question - Only shows current question */}
        {renderCurrentQuestion()}

        {/* Input Area */}
        {renderInputArea()}
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .faq-chat-container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 102, 204, 0.15);
          display: flex;
          flex-direction: column;
          height: 90vh;
          position: relative;
        }

        .chat-launcher {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
          padding: 20px;
        }

        .launcher-content {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 102, 204, 0.15);
          max-width: 500px;
          width: 100%;
        }

        .chat-header {
          padding: 16px 20px;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border-radius: 12px 12px 0 0;
        }

        .header-content {
          display: flex;
          align-items: center;
        }

        .progress-section {
          padding: 16px 20px;
          background: #f6fbff;
          border-bottom: 1px solid #e6f7ff;
        }

        .progress-info {
          animation: fadeIn 0.3s ease;
        }

        .chat-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          background: #fafafa;
          display: flex;
          flex-direction: column;
        }

        .question-card {
          margin-bottom: 24px;
          animation: slideIn 0.3s ease;
        }

        .bot-message {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .message-content {
          flex: 1;
        }

        .message-bubble {
          padding: 16px;
          border-radius: 18px;
          max-width: 85%;
          position: relative;
        }

        .message-bubble.bot {
          background: white;
          border: 1px solid #e6f7ff;
          border-radius: 18px 18px 18px 4px;
          box-shadow: 0 2px 8px rgba(0, 102, 204, 0.1);
        }

        .message-time {
          font-size: 11px;
          color: #999;
          margin-top: 4px;
          text-align: right;
          padding-right: 4px;
        }

        .quick-options {
          margin-top: 8px;
          animation: fadeIn 0.3s ease;
        }

        .input-area {
          margin-top: auto;
          padding: 20px;
          background: white;
          border-top: 1px solid #f0f0f0;
          position: sticky;
          bottom: 0;
          z-index: 10;
        }

        .input-wrapper {
          margin-bottom: 8px;
        }

        .input-hint {
          text-align: center;
        }

        .answers-count-info {
          margin-top: auto;
          animation: fadeIn 0.3s ease;
        }

        .summary-screen {
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
          padding: 20px;
        }

        .summary-content {
          background: white;
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 8px 32px rgba(0, 102, 204, 0.15);
        }

        .summary-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .summary-card {
          margin-bottom: 30px;
          border: 1px solid #e6f7ff;
          max-height: 400px;
          overflow-y: auto;
        }

        .responses-list {
          padding: 8px;
        }

        .response-item {
          padding: 8px 0;
        }

        .summary-actions {
          margin-top: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scrollbar styling */
        .chat-content::-webkit-scrollbar {
          width: 6px;
        }

        .chat-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-content::-webkit-scrollbar-thumb {
          background: rgba(0, 102, 204, 0.2);
          border-radius: 3px;
        }

        .summary-card::-webkit-scrollbar {
          width: 4px;
        }

        .summary-card::-webkit-scrollbar-thumb {
          background: rgba(0, 102, 204, 0.2);
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .faq-chat-container {
            height: 100vh;
            border-radius: 0;
            max-width: 100%;
          }
          
          .summary-content,
          .launcher-content {
            padding: 20px;
          }
          
          .message-bubble {
            max-width: 90%;
          }
          
          .response-item .ant-col-sm-8 {
            margin-bottom: 12px;
          }
          
          .response-item .ant-col-sm-16 {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQStyleStudyChatbot;