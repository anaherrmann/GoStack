import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form action="">
          <input placeholder="Digite o nome do repositório" />
          <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
          <a href="">
            <img
                src="https://avatars0.githubusercontent.com/u/17033335?s=460&u=8e9482ba6b3cf1db3cccd523726e02c08d16a1b5&v=4"
                alt="Ana Herrmann"
            />
            <div>
                <strong>anaherrmann/appdog</strong>
                <p>App for animal adoption management</p>
            </div>

            <FiChevronRight size={20}/>
          </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
