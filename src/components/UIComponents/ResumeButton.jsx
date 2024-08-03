import "../CSS/resumebtn.css";
function ResumeButton() {
  const handleDownload = async () => {
    try {
      const response = await fetch("/assets/Nilesh_Gautam_Resume.pdf"); // Fetch the PDF file
      const blob = await response.blob(); // Convert the response to a Blob
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className=" send-btn self-end clip disabled:grayscale"
    >
      <span>Download Resume</span>
    </button>
  );
}

export default ResumeButton;
