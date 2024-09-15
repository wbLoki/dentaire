'use client';
import React, { useState } from 'react';

type Props = {};
const services = [
  'Extraction dentaire',
  'Blanchiment dentaire',
  'Detartrage',
  'Implant dentaire',
  'Prothèse mobile',
  'Prothèse fixée',
];

// <<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
function AppointmentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Envoyer');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const services = [
    'Extraction dentaire',
    'Blanchiment dentaire',
    'Detartrage',
    'Implant dentaire',
    'Prothèse mobile',
    'Prothèse fixée',
  ];

  const handleValidation = () => {
    const errors = {
      name: name.length <= 0,
      email: email.length <= 0,
      phone: phone.length <= 0,
      service: service.length <= 0,
      message: message.length <= 0,
    };

    const isValid = !Object.values(errors).some((error) => error);

    setShowSuccessMessage(false);
    setShowFailureMessage(false);

    return isValid;
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      try {
        const response = await fetch('/api/sendgrid', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            service,
            message,
          }),
        });

        const { error } = await response.json();

        if (error) {
          setShowFailureMessage(true);
        } else {
          setShowSuccessMessage(true);
        }

        setButtonText('Envoyer');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl text-slate-500"
    >
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm leading-6 uppercase"
          >
            Nom et prénom
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              // id="name"
              // name="name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
              // autoComplete="given-name"
              placeholder="Nom et prénom"
              className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm leading-6 uppercase"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              placeholder="Address email"
              className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm leading-6 uppercase"
          >
            Services
          </label>
          <div className="relative mt-2.5">
            <select
              id="service"
              name="service"
              value={service}
              required
              onChange={(event) => setService(event.target.value)}
              className="h-full w-full appearance-none rounded-md bg-transparent bg-none pl-4 pr-9 focus:ring-2 focus:ring-inset focus:ring-purple md:text-sm block py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 md:leading-6 outline-none"
            >
              <option
                value=""
                disabled
              >
                Choisissez un service
              </option>
              {services.map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm leading-6 uppercase"
          >
            Phone number
          </label>
          <div className="relative mt-2.5">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              required
              onChange={(event) => setPhone(event.target.value)}
              autoComplete="tel"
              placeholder="Numero de telephone"
              className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm leading-6 uppercase"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              value={message}
              required
              onChange={(event) => setMessage(event.target.value)}
              rows={4}
              placeholder="Tapez votre message ici..."
              className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-purple px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
        >
          {buttonText}
        </button>
      </div>
      {showSuccessMessage && (
        <span>Votre message a été envoyé avec succès!</span>
      )}
      {showFailureMessage && (
        <span>Votre message n&apos;a pas pu être envoyé.</span>
      )}
    </form>
  );
}
// function Appointment({}: Props) {
//     // States for contact form fields
//     const [fullname, setFullname] = useState("");
//     const [email, setEmail] = useState("");
//     const [number, setNumber] = useState("");
//     const [service, setService] = useState("");
//     const [message, setMessage] = useState("");
//     const sendToMail = "wailbouymaj+12@gmail.com" // email that will receive notifications
//     const sendFromMail = "wailbouymaj@gmail.com" // email that will send these notifications, preferably a website email

//     //   Form validation state
//     const [errors, setErrors] = useState({});

//     //   Setting button text on form submission
//     const [buttonText, setButtonText] = useState("Envoyer");

//     // Setting success or failure messages states
//     const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//     const [showFailureMessage, setShowFailureMessage] = useState(false);

//   // Validation check method
//     const handleValidation = () => {
//         let tempErrors = {
//             "fullname": false,
//             "email": false,
//             "number": false,
//             "service": false,
//             "message": false,
//         };
//         let isValid = true;

//         if (fullname.length <= 0) {
//         tempErrors["fullname"] = true;
//         isValid = false;
//         }
//         if (email.length <= 0) {
//         tempErrors["email"] = true;
//         isValid = false;
//         }
//         if (number.length <= 0) {
//         tempErrors["number"] = true;
//         isValid = false;
//         }
//         if (service.length <= 0) {
//         tempErrors["service"] = true;
//         isValid = false;
//         }
//         if (message.length <= 0) {
//         tempErrors["message"] = true;
//         isValid = false;
//         }

//         setErrors({ ...tempErrors });
//         // console.log("errors", errors);
//         return isValid;
//     };

//     //   Handling form submit
//     const handleSubmit = async (e: React.SyntheticEvent) => {
//         e.preventDefault();

//         let isValidForm = handleValidation();

//         if (isValidForm) {
//         setButtonText("Sending");
//         const res = await fetch("/api/sendgrid", {
//             body: JSON.stringify({
//             email: email,
//             fullname: fullname,
//             number: number,
//             service: service,
//             message: message,
//             to: sendToMail,
//             from: sendFromMail,
//             }),
//             headers: {
//             "Content-Type": "application/json",
//             },
//             method: "POST",
//         });

//         const { error } = await res.json();
//         if (error) {
//             console.log(error);
//             setShowSuccessMessage(false);
//             setShowFailureMessage(true);
//             setButtonText("Envoyer");
//             return;
//         }
//         setShowSuccessMessage(true);
//         setShowFailureMessage(false);
//         setButtonText("Envoyer");
//         }
//         // console.log(fullname, email, number, service, message);
//     };

//     return (
//         <form action="#" method="POST" onSubmit={handleSubmit} className="mx-auto max-w-xl text-slate-500">
//             <div className="grid grid-cols-1 gap-y-6 gap-x-8 md:grid-cols-2">
//                 {/************************   Nom et Prenom    ************************/}
//                 <div>
//                     <label htmlFor="fullname" className="block text-sm leading-6 uppercase">
//                     nom
//                     </label>
//                     <div className="mt-2.5">
//                     <input
//                         type="text"
//                         name="fullname"
//                         id="fullname"
//                         value={fullname}
//                         required
//                         onChange={e => setFullname(e.target.value)}
//                         autoComplete="given-name"
//                         placeholder='Nom et prenom'
//                         className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
//                     />
//                     </div>
//                 </div>
//                 {/************************   Email    ************************/}
//                 <div>
//                     <label htmlFor="email" className="block text-sm leading-6 uppercase">
//                     Email
//                     </label>
//                     <div className="mt-2.5">
//                     <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         value={email}
//                         required
//                         onChange={e => setEmail(e.target.value)}
//                         autoComplete="email"
//                         placeholder='Address email'
//                         className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
//                     />
//                     </div>
//                 </div>
//                 {/************************   Services    ************************/}
//                 <div>
//                     <label htmlFor="phone-number" className="block text-sm   leading-6 uppercase">
//                     services
//                     </label>
//                     <div className="relative mt-2.5">
//                         <label htmlFor="service" className="sr-only">
//                         Service
//                         </label>
//                         <select
//                         id="service"
//                         name="service"
//                         value={service}
//                         required
//                         onChange={e => setService(e.target.value)}
//                         className="h-full w-full appearance-none rounded-md bg-transparent bg-none pl-4 pr-9 focus:ring-2 focus:ring-inset focus:ring-purple md:text-sm block py-2 px-3.5 shadow-sm ring-1 ring-inset ring-gray-300 md:leading-6 outline-none"
//                         >
//                             <option value="" disabled>Choisissez un service</option>
//                             {services.map((e, i) => <option key={i}>{e}</option>)}
//                         </select>
//                     </div>
//                 </div>
//                 {/************************   Numero    ************************/}
//                 <div>
//                     <label htmlFor="phone-number" className="block text-sm leading-6 uppercase">
//                     Phone number
//                     </label>
//                     <div className="relative mt-2.5">
//                         <input
//                             type="tel"
//                             name="phone-number"
//                             id="phone-number"
//                             value={number}
//                             required
//                             onChange={e => setNumber(e.target.value)}
//                             autoComplete="tel"
//                             className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
//                             placeholder='Numero de telephone'
//                         />
//                     </div>
//                 </div>
//                 {/************************   Message    ************************/}
//                 <div className="md:col-span-2">
//                     <label htmlFor="message" className="block text-sm   leading-6 uppercase">
//                     Message
//                     </label>
//                     <div className="mt-2.5">
//                     <textarea
//                         name="message"
//                         id="message"
//                         value={message}
//                         required
//                         onChange={e => setMessage(e.target.value)}
//                         rows={4}
//                         className="block w-full rounded-md appearance-none py-2 px-3.5 sm:text-sm sm:leading-6"
//                         placeholder="Tapez votre message ici..."
//                     />
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-10">
//             <button
//                 type="submit"
//                 className="block w-full rounded-md bg-purple px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-purple/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
//             >
//                 {buttonText}
//             </button>
//             </div>
//             {
//                 showSuccessMessage ? <span>Votre message a été envoyé avec succès!</span> :
//                 showFailureMessage && <span>Votre message n&apos;a pas pu être envoyé.</span>
//             }
//         </form>
//   )
// }
// <<<<<<<  ef2e6ef7-3143-45e0-be52-5ced3896dc6d  >>>>>>>

export default AppointmentForm;
