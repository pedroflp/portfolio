import React, { useState } from 'react';
import { useForm } from '@formspree/react';

import BackHome from '../../components/backtohome/BackHome';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import MailBox from '../../media/images/mailbox';

import './style/messagepage.css';
import MailSent from '../../media/images/mailsent';

export default function MessagePage() {
  const [state, handleSubmit] = useForm("xdoyoglw");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (state.succeeded) {
    return (
      <div className="direct-message-success">
        <MailSent />

        <h1>Olá <strong style={{ textTransform: 'capitalize' }}>{name}</strong>. Sua mensagem foi enviada!</h1>
        <span>Em algumas horas retornarei seu contato para este email (<strong>{email}</strong>), e por lá prosseguiremos.
        <br/><strong>Obrigado pelo contato!</strong></span>

        <BackHome />
      </div>
    )
  }

  return (
    <>

    <Navbar />

    <div className="direct-message-container">
      <BackHome />
      <div className="direct-message-content">
        <div className="direct-message-title">
          <h1><strong>Mensagem</strong> Direta.</h1>
          <span>Preenchendo o formulário abaixo você vai estar se comunicando diretamente comigo. 
          <br/><strong> Toda comunicação continuará no email que você irá informar!</strong></span>
        </div>

        <div className="direct-message-form">
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="name" 
            name="name"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            required
            style={{ textTransform: 'capitalize' }}
          />
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={3}
          />
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>

         <MailBox />
        </div>

      </div>
    </div>

    <Footer />

    </>
  )
}