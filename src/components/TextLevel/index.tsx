import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
    level: number;
    content: string;
}

const TextLevel: React.FC<Props> = ({ level, content }) => {
  let textComponent = null;

  if (level === 1) {
    textComponent = <Title level={1}>{content}</Title>;
  } else if (level === 2) {
    textComponent = <Title level={2}>{content}</Title>;
  } else if (level === 3) {
    textComponent = <Title level={3}>{content}</Title>;
  } else if (level === 4) {
    textComponent = <Title level={4}>{content}</Title>;
  } else if (level === 5) {
    textComponent = <Title level={5}>{content}</Title>;
  }

  return textComponent;
};

export default TextLevel;
