// import React, { useRef } from 'react';
// import styled from 'styled-components';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// const Container = styled.div`
//   padding: 30px;
//   margin: 20px auto;
//   max-width: 800px;
//   background: #fff;
//   border: 2px solid #ccc;  /* Add Border */
//   border-radius: 10px;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//   font-family: Arial, sans-serif;
// `;

// const Heading = styled.h2`
//   text-align: center;
//   color: #f26725;
//   margin-bottom: 10px;
// `;

// const SubHeading = styled.h3`
//   text-align: center;
//   margin-bottom: 20px;
//   font-weight: 500;
// `;

// const Paragraph = styled.p`
//   margin-bottom: 15px;
//   line-height: 1.5;
// `;

// const OrderedList = styled.ol`
//   margin-left: 20px;
//   line-height: 1.6;
// `;

// const UnorderedList = styled.ul`
//   margin-left: 20px;
//   line-height: 1.6;
// `;

// const InputRow = styled.div`
//   margin: 10px 0;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const SignatureRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 30px;
// `;

// const SignatureField = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const StampDateRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const DownloadButton = styled.button`
//   margin: 30px auto 0;
//   display: block;
//   padding: 12px 30px;
//   background-color: #f26725;
//   color: white;
//   font-size: 16px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: #d7541f;
//   }
// `;

// const HiddenPrint = styled.div`
//   @media print {
//     display: none;
//   }
// `;

// const DeclarationForm = () => {
//   const formRef = useRef();
//   const downloadButtonRef = useRef();

//   const handleDownload = () => {
//     // Hide Download Button during PDF generation
//     downloadButtonRef.current.style.display = 'none';

//     html2canvas(formRef.current, { scale: 2 }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF('p', 'mm', 'a4');

//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//       pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
//       pdf.save('Declaration_Form.pdf');

//       // Show Download Button back
//       downloadButtonRef.current.style.display = 'block';
//     });
//   };

//   return (
//     <>
//       <Container ref={formRef}>
//         <Heading>Declaration Form</Heading>
//         <SubHeading>Student Declaration</SubHeading>
//         <Paragraph>I, the undersigned, hereby declare that:</Paragraph>

//         <OrderedList>
//           <li>
//             I am a <b>bonafide student</b> of:
//             <InputRow>
//               Name of School/College:
//               <Input type="text" />
//             </InputRow>
//           </li>

//           <li>
//             My current academic details are as follows:
//             <InputRow>
//               Standard/Course:
//               <Input type="text" />
//             </InputRow>
//             <InputRow>
//               Admission/Enrollment No.:
//               <Input type="text" />
//             </InputRow>
//             <InputRow>
//               Academic Year:
//               <Input type="text" />
//             </InputRow>
//           </li>

//           <li>
//             I am applying for a <b>Government Concession Bus Pass</b> for the purpose of traveling between my residence and my educational institution.
//           </li>

//           <li>
//             The details provided by me in this application are <b>true, correct, and complete</b> to the best of my knowledge and belief.
//           </li>

//           <li>
//             I understand that:
//             <UnorderedList>
//               <li>Any <b>false or misleading information</b> may lead to <b>cancellation of the bus pass</b>.</li>
//               <li>The bus pass is <b>non-transferable</b> and must be used only by me.</li>
//               <li>I will carry the <b>bus pass at all times</b> while traveling and produce it upon request.</li>
//             </UnorderedList>
//           </li>

//           <li>
//             I agree to abide by the rules and regulations prescribed by the <b>Transport Authority</b> and the <b>Government of Maharashtra</b>.
//           </li>
//         </OrderedList>

//         <SignatureRow>
//           <SignatureField>
//             Principal's Signature:
//             <Input type="text" />
//           </SignatureField>
//           <SignatureField>
//             Student's Signature:
//             <Input type="text" />
//           </SignatureField>
//         </SignatureRow>

//         <StampDateRow>
//           <div>College Stamp: [STAMP BOX]</div>
//           <div>Date: <Input type="date" /></div>
//         </StampDateRow>
//       </Container>

//       <HiddenPrint ref={downloadButtonRef}>
//         <DownloadButton onClick={handleDownload}>Download as PDF</DownloadButton>
//       </HiddenPrint>
//     </>
//   );
// };

// export default DeclarationForm;




import React, { useRef } from 'react';
import styled from 'styled-components';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Sidebar from './Sidebar'; // ⬅️ Make sure you import your Sidebar

// Layout Wrapper
const Layout = styled.div`
  display: flex;
`;

// Main content area
const MainContent = styled.div`
  flex: 1;
  padding: 30px;
`;

// Styled components for the form
const Container = styled.div`
  margin: 20px auto;
  max-width: 800px;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  padding: 30px;
`;

const Heading = styled.h2`
  text-align: center;
  color: #f26725;
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.5;
`;

const OrderedList = styled.ol`
  margin-left: 20px;
  line-height: 1.6;
`;

const UnorderedList = styled.ul`
  margin-left: 20px;
  line-height: 1.6;
`;

const InputRow = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SignatureRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const SignatureField = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StampDateRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const DownloadButton = styled.button`
  margin: 30px auto 0;
  display: block;
  padding: 12px 30px;
  background-color: #f26725;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #d7541f;
  }
`;

const HiddenPrint = styled.div`
  @media print {
    display: none;
  }
`;

const DeclarationForm = () => {
  const formRef = useRef();
  const downloadButtonRef = useRef();

  const handleDownload = () => {
    downloadButtonRef.current.style.display = 'none';

    html2canvas(formRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Declaration_Form.pdf');

      downloadButtonRef.current.style.display = 'block';
    });
  };

  return (
    <Layout>
      <Sidebar /> {/* Sidebar on the left */}

      <MainContent>
        <Container ref={formRef}>
          <Heading>Declaration Form</Heading>
          <SubHeading>Student Declaration</SubHeading>
          <Paragraph>I, the undersigned, hereby declare that:</Paragraph>

          <OrderedList>
            <li>
              I am a <b>bonafide student</b> of:
              <InputRow>
                Name of School/College:
                <Input type="text" />
              </InputRow>
            </li>

            <li>
              My current academic details are as follows:
              <InputRow>
                Standard/Course:
                <Input type="text" />
              </InputRow>
              <InputRow>
                Admission/Enrollment No.:
                <Input type="text" />
              </InputRow>
              <InputRow>
                Academic Year:
                <Input type="text" />
              </InputRow>
            </li>

            <li>
              I am applying for a <b>Government Concession Bus Pass</b> for the purpose of traveling between my residence and my educational institution.
            </li>

            <li>
              The details provided by me in this application are <b>true, correct, and complete</b> to the best of my knowledge and belief.
            </li>

            <li>
              I understand that:
              <UnorderedList>
                <li>Any <b>false or misleading information</b> may lead to <b>cancellation of the bus pass</b>.</li>
                <li>The bus pass is <b>non-transferable</b> and must be used only by me.</li>
                <li>I will carry the <b>bus pass at all times</b> while traveling and produce it upon request.</li>
              </UnorderedList>
            </li>

            <li>
              I agree to abide by the rules and regulations prescribed by the <b>Transport Authority</b> and the <b>Government of Maharashtra</b>.
            </li>
          </OrderedList>

          <SignatureRow>
            <SignatureField>
              Principal's Signature:
              <Input type="text" />
            </SignatureField>
            <SignatureField>
              Student's Signature:
              <Input type="text" />
            </SignatureField>
          </SignatureRow>

          <StampDateRow>
            <div>College Stamp: [STAMP BOX]</div>
            <div>Date: <Input type="date" /></div>
          </StampDateRow>
        </Container>

        <HiddenPrint ref={downloadButtonRef}>
          <DownloadButton onClick={handleDownload}>Download as PDF</DownloadButton>
        </HiddenPrint>
      </MainContent>
    </Layout>
  );
};

export default DeclarationForm;
