import React from 'react';

type AuthFormProps = {
  type: 'sign-in' | 'sign-up'; 
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  return (
    <div>AuthForm - {type}</div>
  );
};

export default AuthForm;
