// ===== analyze.js =====

document.addEventListener("DOMContentLoaded", () => {
    const analyzeBtn = document.getElementById("analyzeBtn");
  
    if (analyzeBtn) {
      analyzeBtn.addEventListener("click", () => {
        const resumeFile = document.getElementById("resumeUpload").files[0];
        const jobDescription = document.getElementById("jobDescription").value.trim();
  
        if (!resumeFile) {
          alert("Please upload a resume file.");
          return;
        }
  
        if (!jobDescription) {
          alert("Please enter a job description.");
          return;
        }
  
        // Optional: Store values temporarily using localStorage
        localStorage.setItem("jdText", jobDescription);
        localStorage.setItem("resumeFileName", resumeFile.name); // just for UI preview
  
        // Redirect to results.html
        window.location.href = "results.html";
      });
    }
  });
  