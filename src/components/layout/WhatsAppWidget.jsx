'use client';

// import 'react-floating-whatsapp/dist/index.css';
import dynamic from 'next/dynamic';
import whatapp from '../../assets/whatapplogo/logowhatapp.png';

// ✅ Correct dynamic import — specifically the default export
const FloatingWhatsApp = dynamic(
  () => import('react-floating-whatsapp').then(mod => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function WhatsAppWidget() {
  return (
    <FloatingWhatsApp
      phoneNumber="8770676950"
      accountName="Pranav Dwivedi"
      chatMessage="Hello! How can I assist you today?"
    //   avatar={whatapp}
      statusMessage="Typically replies in a few minutes"
      placeholder="Type your message..."
      allowClickAway
      notification
      notificationSound
    />
  );
}
